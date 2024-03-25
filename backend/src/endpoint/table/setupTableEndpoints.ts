import {Express} from "express";
import getTables from "../../service/table/TableService";

export default function setupTableEndpoints(app: Express): void {

    /**
     * @openapi
     * /tables:
     *   get:
     *     summary: Retrieves a list of tables
     *     description: This endpoint returns an array of tables available. It is intended for clients to fetch the current state of tables.
     *     responses:
     *       200:
     *         description: A list of tables
     *         content:
     *           application/json:
     *             schema:
     *                $ref: '#/components/schemas/ITable'
     *       403:
     *         description: Forbidden access, could occur if there's an error fetching the tables.
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message:
     *                   type: string
     *                   description: Error message detailing why the request was forbidden.
     */
    app.get('/tables', (req, res) => {
        try {
            const tables = getTables();

            res.send({tables});
        } catch (e) {
            const {message} = e as Error;
            res.status(403).json({message});
        }
    });
}
