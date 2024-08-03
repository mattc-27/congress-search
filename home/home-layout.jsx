import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
//import Header from '../Header';

// stylesheet
import '../style.css';

// icons
import logoA from '../logoA.png';
import mdMenu from '../mdMenu.png';
import footerLogo from '../footerLogo.png';


function HomeLayout() {

    const [mobile, setMobile] = useState(null);
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
                    <div className='header-content'>
                        <div className='header-title'>
                            <img src={logoA} />
                            <h1>Legislation Lemur</h1>
                        </div>
                        <div className='mobile-nav'>
                            <button id="showNav" onClick={showMobileNav}>
                                <img src={mdMenu} />
                            </button>
                            {showNav ?
                                <nav className='mobile-nav-menu'>
                                    <Link className='mobile-link-nav' to={'/'}>Home</Link>
                                    <a className='mobile-link-nav' href='/blog'>Search</a>
                                </nav>
                                : null}
                        </div>
                    </div>
                    :
                    <div className='header-content'>
                        <div className='header-title'>
                            <img src={logoA} />
                            <h1>Legislation Lemur</h1>
                        </div>
                        <nav>
                            <Link className='link-nav' to={'/'}>
                                Home
                            </Link>
                            <a className='link-nav' href='/search'>
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
                    <div className='footer-logo'>
                        <img src={footerLogo} />
                    </div>
                    <div className='icon-row'>
                        <FaGithub size={35} color={'#252525'} className='footerIcon'>
                            <a href="https://github.com/LibraryOfCongress/api.congress.gov/" />
                        </FaGithub>
                        <a href="https://api.congress.gov/">
                            <p>
                                Data obtained from the Congress.gov API
                            </p>
                        </a>
                    </div>
                </div>
            </footer>
        </div>

    );
}

export { HomeLayout };