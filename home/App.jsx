import React from 'react';
import { Routes, Route, Outlet, Link, useLocation } from "react-router-dom";
import { HomeLayout } from './home-layout';
import { NoMatch } from './no-match';
import Home from './Home';
import '../style.css';

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
