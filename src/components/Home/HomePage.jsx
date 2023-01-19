import template3 from '../../styles/img/template3.png'

const HomePage = () => {
    return(
        <section className='homepage'>
            <article className='homepage_date'>
                <img src={template3} alt='feuille en aquarelle' className='homepage_date_img homepage_date_img_1' />
                <div className='homepage_date_container'>
                    <h3>Nous nous marions !</h3>
                    <h3>LE 21 JUIN 2024</h3>
                    <h3>À Paris</h3>
                </div>
            </article>
        </section>
    )
}

export default HomePage