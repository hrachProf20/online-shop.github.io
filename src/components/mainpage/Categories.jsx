import React from "react";

const Categories = () => {
    const data = [
        {
            cateImg:'/images/fashion.png',
            cateName:'Fashion',
        },
        {
            cateImg:'/images/electronic.png',
            cateName:'Electronic',
        },
        {
            cateImg:'/images/cars.png',
            cateName:'Cars',
        },
        {
            cateImg:'/images/garden.png',
            cateName:'Home & Garden',
        },
        {
            cateImg:'/svg/gifts.svg',
            cateName:'Gifts',
        },
        {
            cateImg:'/images/music.jpg',
            cateName:'Music',
        },
        {
            cateImg:'/images/beauty.png',
            cateName:'Health & Beauty',
        },
        {
            cateImg:'/images/pets.png',
            cateName:'Pets',
        },
        {
            cateImg:'/svg/baby.svg',
            cateName:'Baby Toys',
        },
        {
            cateImg:'/svg/groceries.svg',
            cateName:'Groceries',
        },
        {
            cateImg:'/images/books.png',
            cateName:'Books',
        },
    ]
    return(
        <>
            <div className="category">
                {
                    data.map((value,index)=>{
                        return(
                            <div>
                                <div className="box f_flex" key={index}>
                                    <img src={value.cateImg} alt=""/>
                                    <span>{value.cateName}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Categories