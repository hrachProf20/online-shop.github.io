import React from "react";
import './Footer.css'
const Footer = () => {
    return(
        <>
          <footer>
               <div className="container grid2">
                   <div className="box">
                       <h1>Sopping</h1>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ducimus facilis fugiat inventore laudantium minima nobis perspiciatis rem repellat similique?</p>
                       <div className="icon d_flex">
                           <div className="img-footer d_flex">
                               <img src="/images/google.png" alt=""/>
                               <span>Google Play</span>
                           </div>
                           <div className="img-footer d_flex">
                               <img src="/images/AppStore.png" alt=""/>
                               <span>App Store</span>
                           </div>
                       </div>
                   </div>

                   <div className="box">
                       <h2>About Us</h2>
                       <ul>
                           <li>Carers</li>
                           <li>Our Stores</li>
                           <li>Our Carers</li>
                           <li>Terms & Conditions</li>
                           <li>Privacy Policy</li>
                       </ul>
                   </div>

                   <div className="box">
                       <h2>Customer Care</h2>
                       <ul>
                           <li>Help Center</li>
                           <li>How to Buy</li>
                           <li>Track Your  Order</li>
                           <li>Corporate & Bulk Purchasing</li>
                           <li>Returns & Refunds</li>
                       </ul>
                   </div>
                   <div className="box">
                       <ul>
                           <li>70 Washington Square South,New York,NY 10012,United States</li>
                           <li>Email:uilib.help@gmail.com</li>
                           <li>Phone:+374 77 67 89 77</li>
                       </ul>
                   </div>
               </div>
          </footer>
        </>
    )
}

export default Footer