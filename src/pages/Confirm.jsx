import Header from "../components/Layout/Header"
import BannerTopPages from "../components/Layout/BannerTopPages"
import ConfirmPage from "../components/Confirm/ConfirmPage"
import BannerBottomPages from "../components/Layout/BannerBottomPages"
import Footer from "../components/Layout/Footer"

const Confirm = () => {
    return (
        <>
            <Header />
            <BannerTopPages />
            <ConfirmPage />
            <BannerBottomPages />
            <Footer />
        </>
    )
}

export default Confirm