import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../style.css';

export default function Home() {

    const navigate = useNavigate()
    
    return (

        <>
            <div className='home-page-container'>
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
                            onClick={(e) => navigate('/blog')}
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