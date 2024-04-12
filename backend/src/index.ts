import express from "express";
import setupEndpoints from "./endpoint/setupEndpoints";
import cors from "cors";
import {JWT_ALGORITHM, JWT_SECRET, PORT} from "./config";
import setupSwagger from "./swagger/setupSwagger";
import {expressjwt} from "express-jwt";


async function Init(): Promise<void> {
    const app = express();
    app.use(cors())
    // All routes except /login require header "Authorization": "Bearer eydasefesfw..."
    app.use(expressjwt({
        secret: JWT_SECRET,
        algorithms: [JWT_ALGORITHM]
    }).unless({
        path: ['/swagger.json', '/login']
    }));

    setupSwagger(app);
    setupEndpoints(app);

    // Start
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
}

void Init();
