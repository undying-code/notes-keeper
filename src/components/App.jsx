import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  let i = -1;
  const [notes, updateNotes] = useState([]);

  function addNote(newNote) {
    updateNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    updateNotes(() => {
      return notes.filter((eachNote, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} id={i} />

      {notes.map((eachNote) => {
        i = i + 1;
        return (
          <Note
            id={i}
            title={eachNote.title}
            content={eachNote.content}
            toDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
