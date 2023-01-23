import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "../../pages/Home";
import Blog from "../../pages/Blog";
import NewArticle from "../../pages/NewArticle";
import Confirm from "../../pages/Confirm";
import Contact from "../../pages/Contact";

// Routes de l'application
const IndexRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/newArticle" element={<NewArticle />} />
                <Route path="/confirm" element={<Confirm />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default IndexRoutes;