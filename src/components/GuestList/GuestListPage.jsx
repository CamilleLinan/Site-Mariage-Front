import GuestListAdd from "./GuestListAdd"
import GuestListDisplay from "./GuestListDisplay"

const GuestListPage = () => {
    return(
        <div className="container_blog_page">
            <section className="blog_page">
                <GuestListAdd />
                <GuestListDisplay />
            </section>
        </div>
    )
}

export default GuestListPage