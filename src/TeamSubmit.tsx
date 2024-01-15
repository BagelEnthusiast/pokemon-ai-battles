import { Pokemon } from "./types";
import Battle from "./Battle";

export function TeamSubmit() {
    //const [team, setTeam] = useState<Pokemon[]>()

    const testTeam: Pokemon[] = 
         [{
        name: 'charizard',
        nature: 'modest',
        item: 'leftovers',
        ability: 'blaze',
        gender: 'male',
        shiny: false,
        teraType: 'fire',
        nickname: null,
        level: 100,
        evs: {
            hp: 0,
            attack: 0,
            defense: 0,
            spAttack: 252,
            spDefense: 0,
            speed: 252
        },
        ivs: {
            hp: 31,
            attack: 31,
            defense: 31,
            spAttack: 31,
            spDefense: 31,
            speed: 31
        },
        moves: ['roost', 'flamethrower', 'earthquake', 'rest']
    }]

    return (
        <>
        <div>
            {/* <input
                value={team[0].name}
                 /> */}
            <Battle teamInfo={testTeam}/>
        </div>
        </>
    )
}