import BlogArticle from "./BlogArticle"
import BlogIntro from "./BlogIntro"

const BlogPage = () => {
    return (
        <section className="blog_page">
            <BlogIntro />
            <BlogArticle />
        </section>
    )
}

export default BlogPage