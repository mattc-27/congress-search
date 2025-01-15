import React from 'react';
import { Routes, Route } from "react-router-dom";
import { HomeLayout } from './home-layout';
import { NoMatch } from './no-match';
import Home from './Home';

import ReactGA from 'react-ga4';

import './main.css';

// GA Tracking
ReactGA.initialize([
    {
        trackingId: ''
    }
]);




export default function HomeApp() {

    function HomePage() {

        return (
            <Home />
        );
    }

    return (
        <Routes>
            <Route path="/" element={<HomeLayout />}>
                <Route index element={<HomePage />} />
                <Route path="*" element={<NoMatch />} />
            </Route>
        </Routes>
    );
}
