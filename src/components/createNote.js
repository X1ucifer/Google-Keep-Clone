import React, { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import AddIcon from '@material-ui/icons/Add';

function CreateNote(props) {
    const[ isExpanded, setExpanded] = useState(false)
    const[ note, setNote] = useState({
        title:"",
        content:"",
    })

    const expand = ()=>{
        setExpanded(true)
    }

    function handleChange(event){
        const {name,value} = event.target;
        setNote((prevNote)=>{
            return{
                ...prevNote,
                [name]:value,
            }
        })
    } 

    function submitNote(event){
        event.preventDefault();
        props.addNote(note);
        setNote({
            title:"",
            content:""
        })
        setExpanded(false)       
    }
    

    return (
        <div>
            <form className="create-note">
                {isExpanded && <input name="title" placeholder="Title" onChange={handleChange} value={note.title}/>}
                <textarea name="content" placeholder="Take a note..." onClick={expand} onChange={handleChange} rows={isExpanded ? 3 : 1} value={note.content} />
                <Zoom in={isExpanded}>
                    <Fab onClick={submitNote}>
                        <AddIcon/>
                    </Fab>
                </Zoom>
            </form>
        </div>
    )
}

export default CreateNote;