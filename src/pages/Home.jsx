import Header from "../components/Layout/Header"
import BannerTop from "../components/Layout/BannerTop"
import HomePage from "../components/Home/HomePage"
import BannerBottom from "../components/Layout/BannerBottom"
import Footer from "../components/Layout/Footer"

const Home = () => {
    return (
        <>
            <Header />
            <BannerTop />
            <HomePage />
            <BannerBottom />
            <Footer />
        </>
    )
}

export default Home