import React from 'react';
import "./Home.css"

// import image "../../images/image/Rectangle1.png"
import data from '../../TravelGuru'
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {

    return (

        <div className="home ">
            <div className="layer ">
                <Header />
                <div className="container ">
                    <div className="  row align-items-center " >
                        <h1 className="home-title">Welcome to Travel Guru</h1>
                        <div className="col-md-6 d-flex">
                            {
                                data.map(data => {
                                    return <>
                                        <Link to={`/place/${data.destination}`}>
                                            <div className="wrapper">
                                                <div className="caards">
                                                    <figure className="caard" style={{
                                                        backgroundImage: `url(${data.mainImage})`,
                                                    }}>
                                                        <div className="layer">
                                                            <figcaption className="text-center">{data.destination}</figcaption>

                                                        </div>
                                                    </figure>
                                                </div>
                                            </div>
                                        </Link>
                                    </>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;