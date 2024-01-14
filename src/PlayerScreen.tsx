import styles from "./Screen.module.css";

interface Props {
  imageUrl: string;
}

export const PlayerScreen = (props: Props) => {
  return (
    <div className={styles.appContainer}>
      <div className={styles.topRow}>Health Bar</div>
      <div className={styles.bottomRow}>
        <div className={styles.bottomLeft}>
          <img
            src={props.imageUrl}
            style={{
              height: "20em",
              width: "20em",
              padding: "5em",
            }}
          />
        </div>
        <div className={styles.bottomRight}>
          <div className={styles.buttonContainer} style={{ padding: "8em" }}>
            <div style={{ margin: ".3em" }}>
              <button className={styles.pushable}>
                <span className={styles.front}>Push me</span>
              </button>
            </div>
            <div style={{ margin: ".3em" }}>
              <button className={styles.pushable}>
                <span className={styles.front}>Push me</span>
              </button>
            </div>
            <div style={{ margin: ".3em" }}>
              <button className={styles.pushable}>
                <span className={styles.front}>Push me</span>
              </button>
            </div>
            <div style={{ margin: ".3em" }}>
              <button className={styles.pushable}>
                <span className={styles.front}>Push me</span>
              </button>
            </div>
          </div>
          <div className={styles.moveInfoContainer}>
            <div>Move Type</div>
            <div>Move Damage</div>
            <div>Move attack type</div>
          </div>
        </div>
      </div>
    </div>
  );
};
