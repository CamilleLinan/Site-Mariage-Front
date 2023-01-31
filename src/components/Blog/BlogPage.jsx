import BlogIntro from "./BlogIntro"
import BlogDisplayArticles from "./BlogDisplayArticles"

const BlogPage = ({ propIsAdmin }) => {
    return (
        <section className="blog_page pages">
            <BlogIntro propIsAdmin={propIsAdmin} />
            <BlogDisplayArticles propIsAdmin={propIsAdmin} />
        </section>
    )
}

export default BlogPage