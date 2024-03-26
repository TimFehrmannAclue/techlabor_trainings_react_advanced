import IPokemon from "../../../type/frontend/pokemon/IPokemon";
import pokemonNames from "./PokemonNames";
import PokemonNames from "./PokemonNames";
import shuffleArray from "../../util/array/shuffleArray";
import generatePermutations from "../../util/permutation/generatePermutations";

const pokemonNamePermutations = generatePermutations(pokemonNames);
const shuffledPokemonNamePermutations = shuffleArray(pokemonNamePermutations);
const Pokemon = shuffledPokemonNamePermutations.map((name, id) => ({name, id}));
const PokemonRepository: { Pokemon: IPokemon[] } = {
    Pokemon,
};
console.info(`Created ${PokemonRepository.Pokemon.length} name permutations from ${PokemonNames.length} Pokemon names.`)

export default function getPokemonDb(): IPokemon[] | never {
    return PokemonRepository.Pokemon;
}
