import HomePage from "../components/Home/HomePage"
import BannerBottom from "../components/Layout/BannerBottom"
import BannerTop from "../components/Layout/BannerTop"
import Header from "../components/Layout/Header"

const Home = () => {
    return (
        <>
            <Header />
            <BannerTop />
            <HomePage />
            <BannerBottom />
        </>
    )
}

export default Home