import Header from "../components/Layout/Header"
import BannerTopPages from "../components/Layout/BannerTopPages"
import MessagesPage from "../components/Messages/MessagesPage"
import BannerBottomPages from "../components/Layout/BannerBottomPages"
import Footer from "../components/Layout/Footer"

const Message = () => {
    return(
        <>
            <Header />
            <BannerTopPages />
            <MessagesPage />
            <BannerBottomPages />
            <Footer />
        </>
    )
}

export default Message