import styles from "./AddNote.module.css";

export function AddNote({ setIsShownNote }) {
  return (
    <div className={styles.addNote}>
      <h1>NEW NOTE</h1>

      <div className={styles.noteContent}>
        <p>TITLE</p>
        <input type="text" />
        <p>CONTENT</p>
        <textarea cols="30" rows="10"></textarea>
        <button className={styles.addButton}>ADD NOTE</button>
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
