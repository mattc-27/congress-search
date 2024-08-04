import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from "react-router-dom";
// icons
import logoA from '../logoA.png';
import mdMenu from '../mdMenu.png';

function Header() {

    return (
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
                                <a className='mobile-link-nav' href='/search'>Search</a>
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
    );
}

export { Header };