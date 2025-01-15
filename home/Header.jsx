import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from "react-router-dom";
// icons
import newLogo from '../newLogo.png';

function Header() {

    return (
        <header>
            {mobile ?
                <div className='header__content'>
                    <div className='header_title'>
                        <img src={newLogo} />
                        <h2>Legislation Lemur</h2>
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
    );
}

export { Header };