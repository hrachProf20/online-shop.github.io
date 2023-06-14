import React from "react";

const Catg = () => {
    const data = [
        {
            cateImg:'/images/apple.png',
            cateName:'Apple',
        },
        {
            cateImg:'/images/samsung.png',
            cateName:'Samsung',
        },
        {
            cateImg:'/svg/oppo.svg',
            cateName:'Oppo',
        },
        {
            cateImg:'/images/vivo.png',
            cateName:'Vivo',
        },
        {
            cateImg:'/images/redmi.jpg',
            cateName:'Redmi',
        },
        {
            cateImg:'/images/sony.png',
            cateName:'Sony',
        },
    ]
    return(
        <>
         <div className="category">
             <div className="chead d_flex">
                 <h1>Brands</h1>
                 <h1>Shops</h1>
             </div>
             {
                 data.map((value,index) => {
                     return(
                         <div className='box f_flex' key={index}>
                             <img src={value.cateImg} alt=""/>
                             <span>{value.cateName}</span>
                         </div>
                     )
                 })}
             <div className="box box2">
                 <button>
                     View all brands
                 </button>
             </div>
         </div>
        </>
    )
}
export default Catg