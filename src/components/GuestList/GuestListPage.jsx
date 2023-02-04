import { useState } from "react"
import GuestListAdd from "./GuestListAdd"
import GuestListDisplay from "./GuestListDisplay"

const GuestListPage = () => {
    const [ shouldRefresh, setShouldRefresh ] = useState(false)
    
    const handleAddGuest = () => {
        setShouldRefresh(true)
    }

    const handleRefreshFinished = () => {
        setShouldRefresh(false)
    }
    
    return(
        <section className="guest_list_page pages">
            <GuestListAdd onAddGuest={handleAddGuest} />
            <GuestListDisplay shouldRefresh={shouldRefresh} onRefreshFinished={handleRefreshFinished} />
        </section>
    )
}

export default GuestListPage