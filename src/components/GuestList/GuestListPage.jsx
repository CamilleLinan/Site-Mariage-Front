import GuestListAdd from "./GuestListAdd"
import GuestListDisplay from "./GuestListDisplay"

const GuestListPage = () => {
    return(
        <section className="guest_list_page pages">
            <GuestListAdd />
            <GuestListDisplay />
        </section>
    )
}

export default GuestListPage