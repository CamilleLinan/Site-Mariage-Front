import Header from "../components/Layout/Header"
import BannerTopPages from "../components/Layout/BannerTopPages"
import GuestListPage from "../components/GuestList/GuestListPage"
import BannerBottomPages from "../components/Layout/BannerBottomPages"
import Footer from "../components/Layout/Footer"

const GuestList = () => {
    return(
        <>
            <Header />
            <BannerTopPages />
            <GuestListPage />
            <BannerBottomPages />
            <Footer />
        </>
    )
}

export default GuestList