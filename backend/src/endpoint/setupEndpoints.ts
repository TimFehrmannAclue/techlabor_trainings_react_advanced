import {Express} from "express";
import bodyParser from 'body-parser';
import addUserEndpoints from "./addUserEndpoints";
import addPokemonEndpoints from "./addPokemonEndpoints";

export default function setupEndpoints(app: Express): void {
    app.use(bodyParser.json());

    addUserEndpoints(app);
    addPokemonEndpoints(app);
}
