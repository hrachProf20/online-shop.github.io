import React from "react";
import Tdata from "./Tdata";
import Slider from "react-slick";
const TopCart = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay:true,
        responsive:[
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    dots: false
                }
            },
        ]
    }

    return(
        <>
            <Slider {...settings}>

            {
                Tdata.map((value,index) => {
                    return(
                        <>
                        <div className="box product" key={index}>
                            <div className="nameTop d_flex">
                                <span className="tleft">{value.para}</span>
                                <span className="tright">{value.desc}</span>
                            </div>
                            <div className="img-like">
                                <img src={value.cover} alt=""/>
                                <img src={value.coverTwo} alt=""/>
                                <img src={value.coverThree} alt=""/>
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

export default TopCart