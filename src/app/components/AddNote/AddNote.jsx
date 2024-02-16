import { useState } from "react";
import styles from "./AddNote.module.css";

export function AddNote({ setIsShownNote, addNewNote }) {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");

  function addNote() {
    addNewNote(noteTitle, noteContent);
    setIsShownNote(false);
  }

  return (
    <div className={styles.addNote}>
      <h1>NEW NOTE</h1>

      <div className={styles.noteContent}>
        <p>TITLE</p>
        <input type="text" onChange={(e) => setNoteTitle(e.target.value)} />
        <p>CONTENT</p>
        <textarea
          onChange={(e) => setNoteContent(e.target.value)}
          cols="30"
          rows="10"
        ></textarea>
        <button onClick={addNote} className={styles.addButton}>
          ADD NOTE
        </button>
        <button
          onClick={() => setIsShownNote(false)}
          className={styles.cancelButton}
        >
          CANCEL
        </button>
      </div>
    </div>
  );
}
