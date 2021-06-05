import React from 'react'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


const Note = (props) => {

    function Delete(){
        props.deleteNote(props.id)
    }
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={Delete}><DeleteForeverIcon/></button>
        </div>
    )
}

export default Note;
