import React from 'react';
import Frame from 'iframe-react';
import "./Hotel.css"
import { useParams } from 'react-router-dom';
import data from '../../TravelGuru';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import HeaderDark from '../Header/HeaderDark';



const Hotel = () => {
    let { room } = useParams()
    const singleData = data.find(data => data.destination === room);
    // console.log(singleData)
    let { destination, } = singleData
    return (
        <div>
            <HeaderDark />
            <div className="container">
                <div className="row">
                    <div className="col-6 justify-content-center hotel-left mr-5">
                        <h3 className="title mr-5">Stays in {destination}</h3>
                        {/* Rooms */}
                        <div className="row single-room mb-5  ">
                            <div className="col-6">
                                <img src={singleData.hotel1.image} alt="" />
                            </div>
                            <div className="col-6 description">
                                <h5>{singleData.hotel1.hotelTitle}</h5>
                                <p>{singleData.hotel1.hotelDetail}</p>
                                <div className="row">
                                    <div className="col-6"><FontAwesomeIcon className=" star " icon={faStar} />{singleData.hotel1.hotelRating}</div>
                                    <div className="col-6">{singleData.hotel1.hotelPrice}</div>
                                </div>
                            </div>
                        </div>
                        <div className="row single-room mb-5 ">
                            <div className="col-6">
                                <img src={singleData.hotel2.image} alt="" />
                            </div>
                            <div className="col-6 description">
                                <h5>{singleData.hotel2.hotelTitle}</h5>
                                <p>{singleData.hotel2.hotelDetail}</p>
                                <div className="row">
                                    <div className="col-6"><FontAwesomeIcon className=" star " icon={faStar} />{singleData.hotel2.hotelRating}</div>
                                    <div className="col-6">{singleData.hotel2.hotelPrice}</div>
                                </div>
                            </div>
                        </div>
                        <div className="row single-room mb-5 ">
                            <div className="col-6">
                                <img src={singleData.hotel3.image} alt="" />
                            </div>
                            <div className="col-6 description">
                                <h5>{singleData.hotel3.hotelTitle}</h5>
                                <p>{singleData.hotel3.hotelDetail}</p>
                                <div className="row">
                                    <div className="col-6"><FontAwesomeIcon className=" star " icon={faStar} />{singleData.hotel3.hotelRating}</div>
                                    <div className="col-6">{singleData.hotel3.hotelPrice}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6  hotel-right ml-5">
                    {/* MAP */}
                        <Frame
                            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyA2GxqycuuqQhlG9MdL-i_339Qwea4s5JQ
      &q=${destination}`} allowfullscreen
                            title="iFrame example"
                        >
                        </Frame>

                    </div>
                </div>
            </div>
        </div>
    );
};
export default Hotel;
