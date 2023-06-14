import {Router} from "react-router";
import {useState} from "react";

const ShopCart = ({ShopItems, addToCart}) => {
    const [count,setCount] = useState(0);
    const increment = () => {
        setCount(count + 1)
    }

    return (
        <>

                {
                    ShopItems.map((ShopItems) => {

                        return (
                            <div className="box">
                                <div className="product mtop">
                                    <div className="img-shop">
                                        <span className="discount"> {ShopItems.discount} % Off</span>
                                        <img src={ShopItems.cover} alt=""/>
                                        <div className="product-like">
                                            <label htmlFor="">0</label> <br/>
                                            <i className='fa fa-heart' onClick={increment}></i>
                                        </div>
                                    </div>
                                    <div className="product-details">
                                        <h3>{ShopItems.name}</h3>
                                        <div className="rate">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="price">
                                            <h4>{ShopItems.price}.00</h4>
                                            <button onClick={() => addToCart(ShopItems)}>
                                                <i className="fa fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

        </>
    )
}

export default ShopCart