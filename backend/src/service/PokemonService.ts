import IPokemon from "../../type/frontend/pokemon/IPokemon";
import {getPokemonDb, savePokemonDb} from "../repository/PokemonRepository";

export function getPokemon(): IPokemon[] {
    return getPokemonDb();
}

export function savePokemon(pokemon: IPokemon[]): void {
    savePokemonDb(pokemon);
}
