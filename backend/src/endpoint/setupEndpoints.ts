import {Express} from "express";
import bodyParser from 'body-parser';
import setupUserEndpoints from "./user/setupUserEndpoints";
import setupTableEndpoints from "./table/setupTableEndpoints";

export default function setupEndpoints(app: Express): void {
    app.use(bodyParser.json());

    setupUserEndpoints(app);
    setupTableEndpoints(app);
}
