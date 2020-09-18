import React from 'react';
import "./BookingPage.css"
import Header from '../Header/Header';
import { Link, useParams } from 'react-router-dom';
import data from '../../TravelGuru';
const BookingPage = () => {
    let { place } = useParams()

    const singleData = data.find(data => data.destination === place);

    let { mainImage, destination, description } = singleData

    return (
        <div>
            <div className="booking-page"
                style={{
                    backgroundImage: `url(${mainImage})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}>
                <div className="layer">
                    <Header />
                    <div className="container  ">
                        <div className="row row-center  " >
                            <div className="col-md-6  ">
                                <h1 className="booking-title"> {destination}</h1>
                                <p className="booking-description">{description}</p>
                            </div>
                            <div className="col-md-6 pl-5 pr-5">
                                <div className="card d-flex justify-content-center" style={{ width: "470px", height: "427px" }}>
                                    <div className="card-body">
                                        <form>
                                            <div className="form-group">
                                                <div className="form-group">
                                                    <label className="text-dark" htmlFor="exampleFormControlInput1">Origin</label>
                                                    <select className="form-control" id="exampleFormControlSelect1">
                                                        <option>Dhaka</option>
                                                        <option>Chittagong</option>
                                                        <option>Rajshahi</option>
                                                        <option>Sylhet</option>
                                                        <option>Barisal</option>
                                                    </select>
                                                </div>
                                                <div className="form-group ">
                                                    <label className="text-dark" htmlFor="exampleFormControlInput1">Destination</label>
                                                    <select className="form-control" id="exampleFormControlSelect1">
                                                        <option selected>{destination}</option>
                                                        <option >Cox's Bazar</option>
                                                        <option>Shreemangal</option>
                                                        <option >Sundarban</option>
                                                    </select>
                                                    <br />
                                                    <div className="form-group">
                                                        <label className="text-dark" htmlFor="exampleFormControlInput1">From</label>
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <input required type="date" id="birthday" name="birthday" />
                                                            </div>
                                                            <div className="col-6">
                                                                <input required type="date" id="birthday" name="birthday" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <br />
                                            <br />

                                            <Link to={`/hotel/${destination}`}><div type="submit" className="btn btn-lg btn-block btn-warning">Start Booking</div></Link>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingPage;