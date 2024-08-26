import express from "express";
import cors from 'cors'
import morgan from "morgan";
import { PORT } from '../config/conf.js'
import { dbConnection } from "../db/connection.js";
import path from 'node:path';
import { fileURLToPath } from "node:url";
import { router } from "../routes/routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class Server {

    constructor() {
        this.app = express();
        this.port = PORT;

        this.dbConnect();

        this.middlewares();
        this.routes();
    }

    async dbConnect() {
        await dbConnection()
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.static(path.join(__dirname, '../views')))
    }

    routes() {
        this.app.use(router)
    }

    listen() {
        this.app.listen(this.port, () => console.log(`Server on http://127.0.0.1:${this.port}`))
    }

}


export default Server;