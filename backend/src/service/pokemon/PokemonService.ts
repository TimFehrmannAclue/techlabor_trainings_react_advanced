import getPokemonDb from "../../repository/pokemon/PokemonRepository";
import IPokemon from "../../../type/frontend/pokemon/IPokemon";

export default function getPokemon(): IPokemon[] {
    return getPokemonDb();
}
