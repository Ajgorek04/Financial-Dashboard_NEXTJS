"use client";
import styles from "./Notes.module.css";
import { FinancialBox } from "../FinancialBox/FinancialBox";
import { useState } from "react";
import { AddNote } from "../AddNote/AddNote";

export function Notes() {
  const [isShownNote, setIsShownNote] = useState(false);
  const notes = [
    {
      name: "Notatka 1",
      content: "Wiem",
    },
    {
      name: "Notatka 2",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam vel expedita non, recusandae sed tempora voluptatibus ea inventore assumenda culpa fugit libero praesentium officiis quasi sunt cupiditate omnis dolorum neque",
    },
    {
      name: "Notatka 3",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ue",
    },
    {
      name: "Notatka 4",
      content:
        "Lorem ipsum dolor si officiis quasi sunt cupiditate omnis dolorum neque",
    },
    {
      name: "Notatka 5",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing bero praesentium officiis quasi sunt cupiditate omnis dolorum neque",
    },
    {
      name: "Notatka 6",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing bero praesentium officiis quasi sunt cupiditate omnis dolorum neque",
    },
    {
      name: "Notatka 7",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing bero praesentium officiis quasi sunt cupiditate omnis dolorum neque",
    },
  ];

  return (
    <div className={styles.notes}>
      <FinancialBox>
        <div className={styles.addNote}>
          <h3>Notes</h3>
          <button onClick={() => setIsShownNote(true)}>ADD NOTE</button>
        </div>
        <hr />
        <ul className={styles.noteList}>
          {notes.map((note) => {
            return (
              <li key={note.name}>
                <h3>Note Title: {note.name}</h3>
                <p>
                  <b>Note Content: </b> {note.content}
                </p>
              </li>
            );
          })}
        </ul>
      </FinancialBox>
      {isShownNote && <AddNote setIsShownNote={setIsShownNote} />}
    </div>
  );
}
