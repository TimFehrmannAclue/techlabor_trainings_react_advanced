import express from "express";
import setupSwagger from "./swagger/setupSwagger";
import setupEndpoints from "./endpoint/setupEndpoints";
import cors from "cors";
import {PORT} from "./config";

async function Init(): Promise<void> {
    const app = express();
    app.use(cors())

    setupSwagger(app);
    setupEndpoints(app);

    // Start
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
}

void Init();
