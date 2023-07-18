import {Router} from "react-router";
import Slider from "react-slick";
import {useState} from "react";
const NextArrow = (props) => {
    const {onClick} = props
    return(
        <div className="control-btn" onClick={onClick}>
            <button className="next">
                <i className="fa fa-long-arrow-alt-right"></i>
            </button>
        </div>
    )
}

const PrevArrow = (props) => {
    const {onClick} = props
    return(
        <div className="control-btn" onClick={onClick}>
            <button className="prev">
                <i className="fa fa-long-arrow-alt-left"></i>
            </button>
        </div>
    )
}
const FlashCards = ({productItems, addToCart}) => {
    const [count,setCount] = useState(0);
    const increment = () => {
        setCount(count + 1)
    }
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className='header-categories'>
            <Slider {...settings}>

            {
                productItems.map((productItems) => {

                    return (

                        <div className="box ">
                            <div className="product mtop">
                                <div className="img-flesh">
                                    <span className="discount"> {productItems.discount} % Off</span>
                                    <img src={productItems.cover} alt=""/>
                                    <div className="product-like">
                                        <label htmlFor="">0</label> <br/>
                                        <i className='fa fa-heart' onClick={increment}></i>
                                    </div>
                                </div>
                                <div className="product-details">
                                    <h3>{productItems.name}</h3>
                                    <div className="rate">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="price">
                                        <h4>{productItems.price}.00</h4>
                                        <button onClick={() => addToCart(productItems)}>
                                            <i className="fa fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Slider>
            </div>
        </>
    )
}

export default FlashCards