import BannerBottomPages from "../components/Layout/BannerBottomPages"
import BannerTopPages from "../components/Layout/BannerTopPages"
import Footer from "../components/Layout/Footer"
import Header from "../components/Layout/Header"
import NewArticlePage from "../components/NewArticle/NewArticlePage"

const NewArticle = () => {
    return (
        <>
            <Header />
            <BannerTopPages />
            <NewArticlePage />
            <BannerBottomPages />
            <Footer />
        </>
    )
}

export default NewArticle