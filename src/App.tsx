import { useEffect, useState } from "react";
import { BotScreen } from "./BotScreen";
import { PlayerScreen } from "./PlayerScreen";
import { getPokemonAsync } from "./apiCalls"
import { Pokemon } from './types'
import styles from "./App.module.css";

function App() {

  const [currentPokemon, setCurrentPokemon] = useState<Pokemon | undefined>()

  useEffect(() => {
    //TODO: will need an api call for each pokemon on both teams
    getPokemonAsync('charizard')
      .then((pokemon) => {
        console.log('all pokemon:', pokemon)
        setCurrentPokemon(pokemon)
      })
      .catch((err) => console.log(err));
  }, [])

  return (
    <>
      <div className={styles.appContainer}>
        <div className={styles.leftCol}></div>
        <div className={styles.screensContainer}>
          <BotScreen imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/640px-Lion_waiting_in_Namibia.jpg" />
          <PlayerScreen imageUrl={`${currentPokemon?.sprites.back_default}`} />
        </div>
        <div className={styles.rightCol}></div>
      </div>
    </>
  );
}

export default App;
