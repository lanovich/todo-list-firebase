import styles from './modal.module.css';

export const Modal = ({ isOpen, onClose, title, setEditedValue, editedValue, handleUpdate }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <h2>{title}</h2>
        <input
          type="text"
          value={editedValue}
          onChange={(e) => setEditedValue(e.target.value)}
          className={styles.modalInput}
        />
        <div className={styles.modalActions}>
          <button onClick={onClose} className={styles.closeButton}>
            Закрыть
          </button>
          <button onClick={handleUpdate} className={styles.saveButton}>
            Сохранить
          </button>
        </div>
      </div>
    </div>
  );
};
