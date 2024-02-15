"use client";
import styles from "./Notes.module.css";
import { FinancialBox } from "../FinancialBox/FinancialBox";
import { useState } from "react";
import { AddNote } from "../AddNote/AddNote";

export function Notes() {
  const [isShownNote, setIsShownNote] = useState(false);

  return (
    <div className={styles.notes}>
      <FinancialBox>
        <div className={styles.addNote}>
          <h3>Notes</h3>
          <button onClick={() => setIsShownNote(true)}>ADD NOTE</button>
        </div>
        <hr />
      </FinancialBox>
      {isShownNote && <AddNote />}
    </div>
  );
}
