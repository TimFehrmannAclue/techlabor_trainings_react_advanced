import {Express} from "express";
import bodyParser from 'body-parser';
import setupUserEndpoints from "./user/setupUserEndpoints";
import setupPokemonEndpoints from "./pokemon/setupPokemonEndpoints";

export default function setupEndpoints(app: Express): void {
    app.use(bodyParser.json());

    setupUserEndpoints(app);
    setupPokemonEndpoints(app);
}
