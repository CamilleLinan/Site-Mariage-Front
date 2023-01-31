import BlogIntro from "./BlogIntro"
import BlogDisplayArticles from "./BlogDisplayArticles"

const BlogPage = ({ propIsAdmin }) => {
    return (
        <section className="pages blog">
            <BlogIntro propIsAdmin={propIsAdmin} />
            <BlogDisplayArticles propIsAdmin={propIsAdmin} />
        </section>
    )
}

export default BlogPage