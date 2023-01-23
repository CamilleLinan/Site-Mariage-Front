import Header from "../components/Layout/Header"
import BannerTopPages from "../components/Layout/BannerTopPages"
import BlogPage from "../components/Blog/BlogPage"
import BannerBottomPages from "../components/Layout/BannerBottomPages"
import Footer from "../components/Layout/Footer"

const Blog = () => {
    return (
        <>
            <Header />
            <BannerTopPages />
            <BlogPage />
            <BannerBottomPages />
            <Footer />
        </>
    )
}

export default Blog