import React, { useEffect, useState } from 'react';
import { Routes, Route, Outlet, Link, useLocation } from "react-router-dom";

import { AppLayout } from './app-layout';
import Search from './Search';
import Member from './Member';
import { NoMatch } from './no-match';

import ReactGA from 'react-ga4';

import '../style.css';

// GA Tracking
ReactGA.initialize([
    {
        trackingId: ''
    }
]);


export default function MainApp() {


  function Blog() {
  
          return (
              <Search />
          );
      }


    return (

        <Routes>
            {/* Routes in this app don't need to worry about which URL prefix they are
          mounted at. They can just assume they are mounted at /. Then, if they
          are moved under a different basename later on, all routes and links will
          continue to work.
           <Route path="/member-search" element={<MemberSearch />} /> */}
            <Route path="/" element={<AppLayout />}>
                <Route index element={<Blog />} />
                <Route path="/search/:chamber/:id" element={<Member />} />
                <Route path="*" element={<NoMatch />} />
            </Route>
        </Routes>

    );
}