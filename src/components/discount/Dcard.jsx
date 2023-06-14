import React from "react";
import Ndata from "../newarrivals/Ndata";
import Ddata from "./Ddata";
import Slider from "react-slick";

const Dcard = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        marign:20,
    };
    return(
        <>
            <Slider {...settings}>

            {
                    Ddata.map((val,index) => {
                        return(
                            <>
                            <div className="product" key={index}>
                                <div className="box">

                                <div className="img-discount">
                                    <img src={val.cover} alt="" />
                                </div>
                                <h4>{val.name}</h4>
                                <span>{val.price}</span>
                            </div>
                            </div>
                            </>
                        )
                    })
                }
            </Slider>

        </>
    )
}
export default Dcard