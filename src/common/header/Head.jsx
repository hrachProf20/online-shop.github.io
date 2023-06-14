import './Header.css'
import React from "react";
const Head = () => {
    return(
        <div>
            <section className='head'>
                <div className="container d_flex-head">
                    <div className="left row">
                        <i className='fa fa-phone'></i>
                        <label htmlFor="">+374 55 66 88 65</label>
                        <i className="fa fa-envelope"></i>
                        <label htmlFor="">example@gmail.com</label>
                    </div>

                    <div className="right row RText">
                        <label htmlFor="">Theme FAQ's</label>
                        <label htmlFor="">Need Helps</label>
                        <img src='/images/armenia.png' alt="" className='armenia'/>
                        <label htmlFor="">Am</label>
                        <img src='/images/armenia.png' alt="" className='armenia'/>
                        <label htmlFor="">Amd</label>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Head