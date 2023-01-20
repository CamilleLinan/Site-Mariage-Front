import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "../../pages/Home";
import Blog from "../../pages/Blog";

// Routes de l'application
const IndexRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default IndexRoutes;