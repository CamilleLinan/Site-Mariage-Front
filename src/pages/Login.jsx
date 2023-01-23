import Header from "../components/Layout/Header"
import BannerTopPages from "../components/Layout/BannerTopPages"
import LoginPage from "../components/Login/LoginPage"
import BannerBottomPages from "../components/Layout/BannerBottomPages"
import Footer from "../components/Layout/Footer"

const Login = () => {
    return (
        <>
            <Header />
            <BannerTopPages />
            <LoginPage />
            <BannerBottomPages />
            <Footer />
        </>
    )
}

export default Login