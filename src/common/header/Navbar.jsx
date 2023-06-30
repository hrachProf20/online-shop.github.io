import React, {useState} from "react";
import {Link} from "react-router-dom";
const Navbar = () => {
    const [MobileMenu,setMobileMenu] = useState(false)
    return(
        <div>
            <header className='header'>
                <div className="container d_flex">
                    <div className="categories d_flex">
                        <div>
                            <i className="fa fa-border-all"></i>
                        </div>
                        <div>
                            <h4>Categories <i className='fa fa-chevron-down'></i></h4>
                        </div>
                    </div>

                    <div className="navlink">
                        <ul>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>

                            <li>
                                <Link to='user'>Users Account's</Link>
                            </li>

                            <li>
                                <Link to='signUp'>Login in</Link>
                            </li>

                            <li>

                            </li>
                        </ul>
                        <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
                            {
                                MobileMenu? <i className={'fas fa-times close home-bth'}></i> :
                                    <i className="fa-solid fa-xmark open"></i>

                            }
                        </button>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar