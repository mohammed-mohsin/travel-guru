import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import data from '../../TravelGuru';
import Header from '../Header/Header';

const Destination = () => {
    let { key } = useParams();

    const singleData = data.find(data => data.destination === key);

    let { mainImage, destination, description } = singleData

    return (
        <div>
            <div className="home " style={{
                backgroundImage: `url(${mainImage})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}>
                <div className="layer ">
                    <Header />
                    <div className="container ">
                        <div className="  row align-items-center " >
                            <div className="col-md-6 ">
                                <h1 className="destination-title">{destination}</h1>
                                <p className="destination-description"> {description}</p>
                                <Link to={`/destination/${destination}`}>
                                    <div className="btn btn-warning"> Booking <FontAwesomeIcon className=" align-items-center text-dark" icon={faArrowRight} /> </div>
                                </Link>
                            </div>
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
        </div >
    );
};

export default Destination;