import React, { useState } from "react";
import Header from "./components/header"
import CreateNote from "./components/createNote"
import Note from "./components/note";

export default function App() {
  const [notes, setNotes] = useState([

  ])

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote]
    })
  }
  // console.log('notes', notes);

  function deleteNote(id){
    setNotes((prevNotes)=>{
      return prevNotes.filter((noteItem,index)=>{
        return index !== id
      })
    })
  }
  return (
    <div>
      <Header />
      <CreateNote addNote={addNote} />
      {notes.map((item,index) => {
        return (
          <Note id={index} title={item.title} content={item.content} deleteNote={deleteNote} />
        )
      })}
    </div>
  );
}