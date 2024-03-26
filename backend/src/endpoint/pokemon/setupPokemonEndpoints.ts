import {Express} from "express";
import {getPokemon, savePokemon} from "../../service/pokemon/PokemonService";

export default function setupPokemonEndpoints(app: Express): void {

    /**
     * @openapi
     * /pokemon:
     *   get:
     *     summary: Retrieves a list of all Pokemon and more!
     *     description: This endpoint returns an array of Pokemon available. It is intended for clients to fetch the current state of Pokemon.
     *     responses:
     *       200:
     *         description: All Pokemon and more!
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/IPokemon'
     *       403:
     *         description: Forbidden access, could occur if there's an error fetching the Pokemon.
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message:
     *                   type: string
     *                   description: Error message detailing why the request was forbidden.
     */
    app.get('/pokemon', (req, res) => {
        try {
            const pokemon = getPokemon();
            res.send(pokemon);
        } catch (e) {
            const {message} = e as Error;
            res.status(403).json({message});
        }
    });

    /**
     @openapi
     * /pokemon:
     *   post:
     *     summary: Save Pokemon.
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: array
     *             items:
     *               $ref: '#/components/schemas/IPokemon'
     *     responses:
     *       200:
     *         description: Saving Pokemon successful.
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/IPokemon'
     *       403:
     *         description: Pokemon Saving failed.
     */
    app.post('/pokemon', (req, res) => {
        try {
            const pokemon = req.body;
            console.info(pokemon);
            savePokemon(pokemon);
            console.info('saved pokemon')
            // Cant return string due to open issue https://github.com/reduxjs/redux-toolkit/issues/3603
            res.send(pokemon);
        } catch (e) {
            const {message} = e as Error;
            console.info('error: ', message)
            res.status(403).json({message});
        }
    });
}
