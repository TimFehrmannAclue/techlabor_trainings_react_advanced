import {Express} from "express";
import getUserJwtToken from "../../service/user/UserService";

export default function setupUserEndpoints(app: Express): void {

    /**
     @openapi
     * /login:
     *   post:
     *     summary: Authenticates a user and returns a JWT.
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             required:
     *               - email
     *               - password
     *             properties:
     *               email:
     *                 type: string
     *               password:
     *                 type: string
     *     responses:
     *       200:
     *         description: Authentication successful.
     *         content:
     *           application/json:
     *             schema:
     *               type: string
     *       403:
     *         description: Authentication failed.
     */
    app.post('/login', (req, res) => {
        try {
            const {email, password} = req.body;
            console.info(email, password)
            const jwt = getUserJwtToken(email, password);

            res.send(jwt);
        } catch (e) {
            const {message} = e as Error;
            res.status(403).json({message});
        }
    });
}
