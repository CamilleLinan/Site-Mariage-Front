import SectionDate from "./SectionDate"
import SectionWelcome from "./SectionWelcome"

const HomePage = () => {
    return(
        <section className='homepage'>
            <SectionDate />
            <SectionWelcome />
        </section>
    )
}

export default HomePage