import IPokemon from "../../type/frontend/pokemon/IPokemon";
import pokemonNames from "../util/data/PokemonNames";

const PokemonRepository: { Pokemon: IPokemon[] } = {
    Pokemon: pokemonNames.map((name, index) => ({name, id: index + 1})),
};

export function getPokemonDb(): IPokemon[] | never {
    return PokemonRepository.Pokemon.slice(0, 100);
}

export function savePokemonDb(pokemon: IPokemon[]): void {
    PokemonRepository.Pokemon = pokemon;
}
