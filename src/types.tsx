export interface PokemonData {
    sprites: Sprites
}

export interface Sprites {
    back_default: string,
    back_female?: string,
    back_shiny: string,
    back_shiny_female?: string,
    front_default: string,
    front_female?: string,
    front_shiny: string,
    front_shiny_femaile?: string
}

//TODO: make tera type an enum
export interface Pokemon {
    name: string,
    nature: string,
    item: string,
    ability: string,
    gender: string,
    shiny: boolean,
    teraType: string,
    nickname?: string | null,
    level: number,
    evs: EvSpread,
    ivs: IvSpread,
    moves: string[]
}

export interface EvSpread {
    hp: number,
    attack: number,
    defense: number,
    spAttack: number,
    spDefense: number,
    speed: number
}

export interface IvSpread {
    hp: number,
    attack: number,
    defense: number,
    spAttack: number,
    spDefense: number,
    speed: number
}