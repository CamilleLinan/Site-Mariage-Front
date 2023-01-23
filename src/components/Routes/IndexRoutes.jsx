import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "../../pages/Home";
import Blog from "../../pages/Blog";
import NewArticle from "../../pages/NewArticle";
import AttendConfirm from "../../pages/AttendConfirm";

// Routes de l'application
const IndexRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/newArticle" element={<NewArticle />} />
                <Route path="/attendConfirm" element={<AttendConfirm />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default IndexRoutes;