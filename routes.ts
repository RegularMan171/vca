import * as express from 'express';

export class Routes {

    private app:express.Application;

    constructor(app: express.Application) {
        this.app = app;
    }

    private home(): void {
        this.app.get('/', (req, res) => {
            res.send("hey man>> wassup?");
        })
    }

    public getRoutes(): void {
        this.home();
    }
}