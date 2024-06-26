import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import { join } from 'path';

/* Conexão com o banco de dados */
import './src/database';

/* Importando os arquivos de roteamentos */
import homeRoutes from './src/routes/homeRoutes';
import userRoutes from './src/routes/userRoutes';
import tokenRoutes from './src/routes/tokenRoutes';
import alunoRoutes from './src/routes/alunoRoutes';
import fotoRoutes from './src/routes/fotoRoutes';

const whiteList = [
    'https://react2.otaviomiranda.com',
    'http://localhost:4001',
];

const corsOptions = {
    origin: function(origin, callback) {
        if(whiteList.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new TypeError('Not allowed by CORS'));
        }
    }
}

class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors(corsOptions));
        this.app.use(helmet());
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        this.app.use(bodyParser.json());

        /* Arquivo estático */
        this.app.use(express.static(join(__dirname, 'uploads')));

        /* Registrando a requisição */
        this.app.use(morgan(':method :url :status :res[content-length] - :response-time ms HTTP/:http-version'));
    }

    routes() {
        this.app.use('/', homeRoutes);
        this.app.use('/users', userRoutes);
        this.app.use('/tokens', tokenRoutes);
        this.app.use('/alunos', alunoRoutes);
        this.app.use('/fotos', fotoRoutes);
    }
}

export default new App().app;
