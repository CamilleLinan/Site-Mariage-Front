import Header from "../components/Layout/Header"
import BannerTopPages from "../components/Layout/BannerTopPages"
import ContactPage from "../components/Contact/ContactPage"
import BannerBottomPages from "../components/Layout/BannerBottomPages"
import Footer from "../components/Layout/Footer"

const Contact = () => {
    return (
        <>
            <Header />
            <BannerTopPages />
            <ContactPage />
            <BannerBottomPages />
            <Footer />
        </>
    )
}

export default Contact