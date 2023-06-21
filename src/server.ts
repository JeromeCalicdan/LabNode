import express, { Express } from 'express';
import cors from 'cors';
import * as routes from './routes';
import authorizationMiddleware from './middlewares/authorizationMiddleware';
import logger from './logging/logger';
import morganMiddleware from './middlewares/morganMiddleware';
import errorHandler from './middlewares/errorMiddleware';

class Server {
    private app: Express;

    constructor(app: Express) {
        if (!app) {
            throw new Error('Express Instance is undefined');
        }
        this.app = app;
        this.app.set('trust proxy', true);

        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        //this.app.use(authorizationMiddleware);
        this.app.use(morganMiddleware.config);
    }

    errorHandler() {
        this.app.use(errorHandler);
        return this;
    }

    routes() {
        this.app.use('/__gtg', routes.gtgRouter);
        this.app.use('/departments', routes.departmentRoute);
        this.app.use('/employees', routes.employeeRoute);
        this.app.use('/products', routes.productRoute);
        this.app.use('/queryHandlings', routes.queryHandlingRoute);
        return this;
    }
    start(port: string) {
        this.app.listen(port, () => {
            logger.info(`[server]: Server us listening aT PORT ${port}`);
            // eslint-disable-next-line no-console
        });
    }
}

const createServer = (app: Express) => new Server(app);

export default createServer;
