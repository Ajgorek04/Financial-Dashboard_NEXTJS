"use client";
import styles from "./Notes.module.css";
import { FinancialBox } from "../FinancialBox/FinancialBox";
import { useState } from "react";
import { AddNote } from "../AddNote/AddNote";

export function Notes() {
  const [isShownNote, setIsShownNote] = useState(false);
  const [notes, setNotes] = useState([
    {
      name: "Notatka 1",
      content: "Wiem",
    },
    {
      name: "Notatka 2",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam vel expedita non, recusandae sed tempora voluptatibus ea inventore assumenda culpa fugit libero praesentium officiis quasi sunt cupiditate omnis dolorum neque",
    },
  ]);

  function addNewNote(title, content) {
    const newNote = {
      name: title,
      content: content,
    };
    setNotes([...notes, newNote]);
  }

  return (
    <div className={styles.notes}>
      <div className={styles.addNote}>
        <h3>Notes</h3>
        <button onClick={() => setIsShownNote(true)}>ADD NOTE</button>
      </div>
      <div className={styles.notesList}>
        <FinancialBox>
          <ul className={styles.noteList}>
            {notes.map((note) => {
              return (
                <li key={note.name}>
                  <div className={styles.noteTitle}>
                    <h3>Note Title: {note.name}</h3>
                    <button>DEL</button>
                  </div>
                  <p>
                    <b>Note Content: </b> {note.content}
                  </p>
                </li>
              );
            })}
          </ul>
        </FinancialBox>
      </div>

      {isShownNote && (
        <AddNote setIsShownNote={setIsShownNote} addNewNote={addNewNote} />
      )}
    </div>
  );
}
