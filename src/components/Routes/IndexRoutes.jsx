import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "../../pages/Home";
import Blog from "../../pages/Blog";
import NewArticle from "../../pages/NewArticle";
import Confirm from "../../pages/Confirm";
import Contact from "../../pages/Contact";
import Login from "../../pages/Login";
import AuthContext from "../../context/authContext";
import ErrorAuth from "../../pages/ErrorAuth";
import UpdateArticle from "../../pages/UpdateArticle";
import GuestList from "../../pages/GuestList";
import Messages from "../../pages/Messages";

// Routes de l'application
const IndexRoutes = () => {
    const authCtx = useContext(AuthContext);
    const isLoggedIn = authCtx.isLoggedIn;

    return (
        <BrowserRouter>
            <Routes>
                {isLoggedIn ? <Route path="/" element={<Home />} /> : <Route path="/" element={<Login />} />}
                {isLoggedIn ? <Route path="/home" element={<Home />} /> : <Route path="/home" element={<ErrorAuth />} />}
                {isLoggedIn ? <Route path="/blog" element={<Blog />} /> : <Route path="/blog" element={<ErrorAuth />} />}
                {isLoggedIn ? <Route path="/blog/newArticle" element={<NewArticle />} /> : <Route path="/newArticle" element={<ErrorAuth />} />}
                {isLoggedIn ? <Route path="/blog/updateArticle/:id" element={<UpdateArticle />} /> : <Route path="/updateArticle/" element={<ErrorAuth />} />}
                {isLoggedIn ? <Route path="/confirm" element={<Confirm />} /> : <Route path="/confirm" element={<ErrorAuth />} />}
                {isLoggedIn ? <Route path="/guestList" element={<GuestList />} /> : <Route path="/confirm" element={<ErrorAuth />} />}
                {isLoggedIn ? <Route path="/contact" element={<Contact />} /> : <Route path="/contact" element={<ErrorAuth />} />}
                {isLoggedIn ? <Route path="/messages" element={<Messages />} /> : <Route path="/messages" element={<ErrorAuth />} />}
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default IndexRoutes;