import React from 'react';
import { Link, Outlet, useLocation } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
//import Header from '../Header';

import '../style.css';

function HomeLayout() {

    return (
        <div>
            <header>
                <div className='header-content'>
                    <div className='header-title'>
                        <h1>US Congress Explorer</h1>
                    </div>
                    <nav>
                        <Link className='link-nav' to={'/'}>Home</Link>
                        <a className='link-nav' href='/blog'>Search</a>
                    </nav>
                </div>
            </header>
            <div className='container'>
                <Outlet />
            </div>
            <footer>
                <div className='footer-content'>
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