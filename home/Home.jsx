import React from 'react';
import { useNavigate } from 'react-router-dom';
import './main.css';

export default function Home() {

    const navigate = useNavigate()

    return (

        <div className='page__content ' style={{ position: 'relative', minHeight: '100vh' }}>
            <div className='page__title' id="homeContent" style={{ position: 'absolute', border: '0.5px solid #fff' }}>
                <h1 id='welcomeTitleA'>
                    Explore Your Representatives in Congress with Legislation Lemur</h1>
            </div>
            <div className='content__col' id="homeContainer">
                <p className='primary__text' >
                    Discover detailed information about your elected representatives with ease. Our platform allows you to search for any member of the US Congress and access comprehensive data about their background, voting record, sponsored legislation, and more.
                </p>
                <div className='content__row content_start'
                    style={{ maxWidth: '97.5%' }}
                >
                    <button
                        className='cta_button'
                        onClick={(e) => navigate('/search')}
                    >
                        Search
                    </button>
                </div>
            </div>
        </ div>

    );
}