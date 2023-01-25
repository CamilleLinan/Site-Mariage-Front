import BlogIntro from "./BlogIntro"
import BlogDisplayArticles from "./BlogDisplayArticles"

const BlogPage = ({ propIsAdmin }) => {
    return (
        <div className="container_blog_page">
            <section className="blog_page">
                <BlogIntro propIsAdmin={propIsAdmin} />
                <BlogDisplayArticles />
            </section>
        </div>
    )
}

export default BlogPage