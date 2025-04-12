import React from 'react';
import ScrollToTop from "./ScrollToTop.jsx";
import {Outlet} from "react-router-dom";
import NavBar from './NavBar.jsx';

function Layout() {
    return (
        <>
            <NavBar />
            <ScrollToTop/>
            <Outlet/>
        </>
    );
}

export default Layout;