import axios from "axios";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/authContext";
import GuestListDelete from "./GuestListDelete";
import GuestListModify from "./GuestListModify";

const GuestListDisplay = (props) => {
    const authCtx = useContext(AuthContext);

    const [ guestsData, setGuestsData ] = useState([]);
    const { shouldRefresh, onRefreshFinished } = props;

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios({
                method: 'GET',
                url: `http://localhost:5000/api/guests/`,
                headers: {
                    Authorization: `Bearer ${authCtx.token}`,
                }
            });
            setGuestsData(result.data)
            onRefreshFinished();
        };
        fetchData();

      }, [authCtx.token, shouldRefresh, onRefreshFinished]);

    return(
        <div className="container_guest_list">
            {guestsData.length > 0 ? <>
                <header className="container_guest_list_header">
                    <p className="container_guest_list_header_content">Nom de l'invité :</p>
                    <p className="container_guest_list_header_content">Présence :</p>
                </header>
                <ul className="guest_list">
                    {guestsData.map((guest, i) => (
                        <li key={guest._id}>
                            <span className="guest_list_deco"></span>
                            <div className="guest_list_item">
                                <p className="guest_list_item_content guest_list_item_content_name">{guest.lastname} {guest.firstname}</p>
                                <GuestListModify 
                                    propAuth={authCtx} 
                                    propGuestId={guest._id} 
                                    propGuestPresent={guest.willBePresent} 
                                />
                                <GuestListDelete 
                                    propAuth={authCtx} 
                                    propGuest={guest} 
                                    onDelete={() => {
                                        setGuestsData(prevGuests =>
                                            prevGuests.filter(g => g._id !== guest._id))
                                    }}
                                />
                            </div>
                        </li>
                    ))}
                </ul> </>
                :
                <p className="guest_list_none">Il n'y a aucun invité pour le moment</p>
            }
            </div>
    )
}

export default GuestListDisplay