import dateFrame from '../../styles/img/date-frame.png'

const HomeSectionDate = () => {
    return (
        <article className='home_section_date'>
            <img src={dateFrame} alt='feuille en aquarelle' className='home_section_date_img' />
            <div className='home_section_date_container'>
                <h3>Nous nous marions !</h3>
                <h3>LE 21 JUIN 2024</h3>
                <h3>À Paris !</h3>
            </div>
        </article>
    )
}

export default HomeSectionDate