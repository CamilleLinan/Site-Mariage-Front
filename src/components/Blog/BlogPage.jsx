import BlogArticle from "./BlogArticle"
import BlogIntro from "./BlogIntro"

const BlogPage = ({ propIsAdmin }) => {
    return (
        <div className="container_blog_page">
            <section className="blog_page">
                <BlogIntro propIsAdmin={propIsAdmin} />
                <BlogArticle />
            </section>
        </div>
    )
}

export default BlogPage