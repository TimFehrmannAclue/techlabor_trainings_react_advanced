import IPokemon from "../../../type/frontend/pokemon/IPokemon";
import pokemonNames from "./PokemonNames";
import PokemonNames from "./PokemonNames";

const Pokemon = pokemonNames.map((name, id) => ({name, id}));
const PokemonRepository: { Pokemon: IPokemon[] } = {
    Pokemon,
};
console.info(`Created ${PokemonRepository.Pokemon.length} name permutations from ${PokemonNames.length} Pokemon names.`)

export function getPokemonDb(): IPokemon[] | never {
    return PokemonRepository.Pokemon.slice(0, 100);
}

export function savePokemonDb(pokemon: IPokemon[]): void {
    PokemonRepository.Pokemon = pokemon;
}
