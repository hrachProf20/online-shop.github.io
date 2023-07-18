import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
    // const data = [
    //     {
    //         cateImg:'/images/fashion.png',
    //         cateName:'Fashion',
    //     },
    //     {
    //         cateImg:'/images/electronic.png',
    //         cateName:'Electronic',
    //     },
    //     {
    //         cateImg:'/images/cars.png',
    //         cateName:'Cars',
    //     },
    //     {
    //         cateImg:'/images/garden.png',
    //         cateName:'Home & Garden',
    //     },
    //     {
    //         cateImg:'/svg/gifts.svg',
    //         cateName:'Gifts',
    //     },
    //     {
    //         cateImg:'/images/music.jpg',
    //         cateName:'Music',
    //     },
    //     {
    //         cateImg:'/images/beauty.png',
    //         cateName:'Health & Beauty',
    //     },
    //     {
    //         cateImg:'/images/pets.png',
    //         cateName:'Pets',
    //     },
    //     {
    //         cateImg:'/svg/baby.svg',
    //         cateName:'Baby Toys',
    //     },
    //     {
    //         cateImg:'/svg/groceries.svg',
    //         cateName:'Groceries',
    //     },
    //     {
    //         cateImg:'/images/books.png',
    //         cateName:'Books',
    //     },
    // ]
    return(
        <>
            <div className="category">
                <div className="box f_flex name-categories" >
                    <li>
                        <img src="/images/fashion.png" alt=""/>
                        <Link to='/fashion'>Fashion</Link>
                    </li>
                    <li>
                        <img src="/images/electronic.png" alt=""/>
                        <Link to='electronic'>Electronic</Link>
                    </li>
                </div>
                {/*{*/}
                {/*    data.map((value,index)=>{*/}
                {/*        return(*/}
                {/*            <div>*/}
                {/*                <div className="box f_flex name-categories" key={index}>*/}
                {/*                    <li>*/}
                {/*                        <img src="/images/fashion.png" alt=""/>*/}
                {/*                        <Link to='/fashion'>Fashion</Link>*/}
                {/*                    </li>*/}
                {/*                    <li>*/}
                {/*                        <img src="/images/electronic.png" alt=""/>*/}
                {/*                        <Link to='electronic'>Electronic</Link>*/}
                {/*                    </li>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        )*/}
                {/*    })*/}
                {/*}*/}
            </div>
        </>
    )
}

export default Categories