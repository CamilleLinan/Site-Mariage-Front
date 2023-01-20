import HomeSectionDate from "./HomeSectionDate"
import HomeSectionWelcome from "./HomeSectionWelcome"

const HomePage = () => {
    return(
        <section className='homepage'>
            <HomeSectionDate />
            <HomeSectionWelcome />
        </section>
    )
}

export default HomePage