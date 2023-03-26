import styles from "./styles.module.css";

export const EndMenu = ({ winner, onStartClick }) => {
  return (
    <div className={styles.main}>
      <img alt={winner.name} src={winner.img} />
      <h1 className={styles.h1}>{winner.name} has won!</h1>
      <button onClick={onStartClick} className={styles.startButton}>
        Play Again
      </button>
    </div>
  );
};
