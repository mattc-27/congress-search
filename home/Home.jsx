import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../style.css';

export default function Home() {

    const navigate = useNavigate()

    return (

        <>
            <div className='home-page-container'
                style={{
                    backgroundImage:
                        `url(https://images.unsplash.com/photo-1575320181282-9afab399332c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundBlendMode: 'darken'

                }}>
                <div className='welcome-content'>
                    <div className='welcome-title'>
                        <h1>Welcome to the US Congress Explorer!</h1>
                    </div>
                    <div className='welcome-body'>
                        {/*       <p>
                        <Link to={'/search'}>Discover detailed information</Link> about your elected representatives with ease. Our platform allows you to search for any member of the US Congress and access comprehensive data about their background, voting record, sponsored legislation, and more.
                    </p>*/}
                        <p>
                            Discover detailed information about your elected representatives with ease. Our platform allows you to search for any member of the US Congress and access comprehensive data about their background, voting record, sponsored legislation, and more.
                        </p>
                    </div>
                    <div className='welcome-button'>
                        <button
                            className='btn-link'
                            onClick={(e) => navigate('/search')}
                        >
                            Search
                            {/*   <Link  to={'/search'}>Search</Link> */}
                        </button>
                    </div>
                </div>
            </div>
        </>

    );
}