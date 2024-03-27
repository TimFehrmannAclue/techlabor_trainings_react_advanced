import IPokemon from "../../../type/frontend/pokemon/IPokemon";
import pokemonNames from "./PokemonNames";
import PokemonNames from "./PokemonNames";

// const pokemonNamePermutations = generatePermutations(pokemonNames);
// const shuffledPokemonNamePermutations = shuffleArray(pokemonNames);
const Pokemon = pokemonNames.map((name, id) => ({name, id}));
const PokemonRepository: { Pokemon: IPokemon[] } = {
    Pokemon,
};
console.info(`Created ${PokemonRepository.Pokemon.length} name permutations from ${PokemonNames.length} Pokemon names.`)

export function getPokemonDb(): IPokemon[] | never {
    return PokemonRepository.Pokemon.slice(0, 100);
    // return PokemonRepository.Pokemon;
}

export function savePokemonDb(pokemon: IPokemon[]): void {
    PokemonRepository.Pokemon = pokemon;
}
