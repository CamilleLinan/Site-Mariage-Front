import HomeSectionDate from "./HomeSectionDate"
import HomeSectionWelcome from "./HomeSectionWelcome"

const HomePage = () => {
    return(
        <section className='home'>
            <HomeSectionDate />
            <HomeSectionWelcome />
        </section>
    )
}

export default HomePage