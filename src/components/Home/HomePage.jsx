import template1 from '../../styles/img/template1.png'
import template2 from '../../styles/img/template2.png'

const HomePage = () => {
    return(
        <section className='homepage'>
            <article className='homepage_date'>
                <img src={template1} alt='feuille en aquarelle' className='homepage_date_img homepage_date_img_1' />
                <div className='homepage_date_container'>
                    <h3>Nous nous marions !</h3>
                    <h3>LE 21 JUIN 2024</h3>
                    <h3>À Paris</h3>
                </div>
                <img src={template2} alt='feuille en aquarelle' className='homepage_date_img homepage_date_img_2' />
            </article>
        </section>
    )
}

export default HomePage