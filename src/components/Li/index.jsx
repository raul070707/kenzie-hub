import { useState } from "react"
import ModalEdited from "../ModalEdited"


const Li = ({ tech, get}) => {

    const [editedModal, setEditedModal] = useState(false)

    return(
        <>
            <li onClick={() => {setEditedModal(true)}}><span>{tech.title}</span><p>{tech.status}</p></li>
            { editedModal && <ModalEdited title={tech.title} id={tech.id} closeModal={setEditedModal} get={get}/> }
        </>
    )
}

export default Li;