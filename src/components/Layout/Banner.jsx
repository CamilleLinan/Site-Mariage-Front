import imgBanner from '../../styles/img/blog-mariage-banner1.jpg'

const Banner = () => {
    return(
        <div className='banner'>
            <img src={imgBanner} alt='blog-mariage-banner' className='banner_img' />
            <h2 className="banner_title">MARIE & PAUL</h2>
        </div>
    )
}

export default Banner