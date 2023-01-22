import BlogPage from "../components/Blog/BlogPage"
import BannerBottomPages from "../components/Layout/BannerBottomPages"
import BannerTopPages from "../components/Layout/BannerTopPages"
import Footer from "../components/Layout/Footer"
import Header from "../components/Layout/Header"

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