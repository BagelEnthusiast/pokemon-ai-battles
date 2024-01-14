import { BotScreen } from "./BotScreen";
import { PlayerScreen } from "./PlayerScreen";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <div className={styles.appContainer}>
        <div className={styles.leftCol}></div>
        <div className={styles.screensContainer}>
          <BotScreen imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/640px-Lion_waiting_in_Namibia.jpg" />
          <PlayerScreen imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/640px-Lion_waiting_in_Namibia.jpg" />
        </div>
        <div className={styles.rightCol}></div>
      </div>
    </>
  );
}

export default App;
