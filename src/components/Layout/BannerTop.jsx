import imgBanner from '../../styles/img/blog-mariage-banner1.jpg'

const BannerTop = () => {
    return(
        <div className='banner_top'>
            <img src={imgBanner} alt='blog-mariage-banner' className='banner_top_img' />
            <h2 className="banner_top_title">MARIE & PAUL</h2>
        </div>
    )
}

export default BannerTop