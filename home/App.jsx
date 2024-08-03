import React from 'react';
import { Routes, Route, Outlet, Link, useLocation } from "react-router-dom";
import { HomeLayout } from './home-layout';
import { NoMatch } from './no-match';
import Home from './Home';

import ReactGA from 'react-ga4';

import '../style.css';

// GA Tracking
ReactGA.initialize([
    {
        trackingId: ''
    }
]);



export default function HomeApp() {
  
    return (
        <Routes>
            <Route path="/" element={<HomeLayout />}>
                <Route index element={<Home />} />
                <Route path="*" element={<NoMatch />} />
            </Route>
        </Routes>
    );
}
