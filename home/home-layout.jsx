import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

// stylesheet
import './main.css';

// icons
import newLogo from '../newLogo.png';


function HomeLayout() {

    const [mobile, setMobile] = useState(true);
    const [showNav, setShowNav] = useState(null);


    function updateNav() {
        if (window.innerWidth < 740) {
            setMobile(true)
        } else {
            setMobile(false)
        }
    }

    window.addEventListener("resize", updateNav)

    function showMobileNav() {
        if (!showNav) {
            setShowNav(true)
        } else {
            setShowNav(false)
        }
    }

    return (
        <div>
            <header>
                {mobile ?
                    <div className='header__content'>
                        <div className='header_title'>
                            <img src={newLogo} />
                            <h2>Legislation Lemur</h2>
                        </div>
                        <nav className='header_nav'>
                            <Link className='nav_link' to={'/'}>Home</Link>
                            <a className='nav_link' href='/search'>Search</a>
                        </nav>
                    </div>
                    :
                    <div className='header__content'>
                        <div className='header_title'>
                            <img src={newLogo} />
                            <h2>Legislation Lemur</h2>
                            {/*   <h1>Legislation Lemur</h1>
                          */}
                        </div>
                        <nav className='header_nav'>
                            <Link className='nav_link' to={'/'}>
                                Home
                            </Link>
                            <a className='nav_link' href='/search'>
                                Search
                            </a>
                        </nav>
                    </div>
                }
            </header>
            <div className='container'>
                <Outlet />
            </div>
            <footer>
                <div className='footer-content'>
                    <h2>Legislation Lemur</h2>
                    <div className='icon-row'>

                        <a href="https://api.congress.gov/">
                            <p>
                                Data obtained from the Congress.gov API
                            </p>
                        </a>
                        <FaGithub size={25} color={'#fff'} className='footerIcon'>
                            <a href="https://github.com/LibraryOfCongress/api.congress.gov/" />
                        </FaGithub>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export { HomeLayout };