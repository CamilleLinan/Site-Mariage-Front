import Header from "../components/Layout/Header"
import BannerTopPages from "../components/Layout/BannerTopPages"
import ErrorAuthPage from "../components/ErrorAuth/ErrorAuthPage"
import BannerBottomPages from "../components/Layout/BannerBottomPages"
import Footer from "../components/Layout/Footer"

const ErrorAuth = () => {
    return (
        <>
            <Header />
            <BannerTopPages />
            <ErrorAuthPage />
            <BannerBottomPages />
            <Footer />
        </>
    )
}

export default ErrorAuth