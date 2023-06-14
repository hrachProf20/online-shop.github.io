import React from "react";
import './Style.css'
const Wrapper = () => {
    const data = [
        {
           cover:'/images/gruzavik.png',
           title:'Worldwide Delivery',
            desc:'we offer completitive prices on our 100 milion plus product anr range.'
        },
        {
            cover:'/images/user.png',
            title:'Safe Payment',
            desc:'we offer completitive prices on our 100 milion plus product anr range.'
        },
        {
            cover:'/images/shiels.jpg',
            title:'Shop With Confidence',
            desc:'we offer completitive prices on our 100 milion plus product anr range.'
        },
        {
            cover:'/images/support.png',
            title:'24/7support',
            desc:'we offer completitive prices on our 100 milion plus product anr range.'
        },
    ]
    return(
        <>
           <section className="wrapper background">
               <div className="container grid2">
                   {
                       data.map((val,index) => {
                           return(
                               <>
                                   <div className="product" key={index}>
                                       <div className="img icon-circle">
                                           <img src={val.cover} alt=""/>
                                       </div>
                                       <h3>{val.title}</h3>
                                       <p>{val.desc}</p>
                                   </div>
                               </>
                           )
                       })
                   }
               </div>
           </section>
        </>
    )
}

export default Wrapper