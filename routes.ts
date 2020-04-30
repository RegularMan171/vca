import * as express from 'express';
import * as path from 'path';

export class Routes {

    private app:express.Application;

    constructor(app: express.Application) {
        this.app = app;
        this.setStaticDir();
    }

    private home(): void {
        this.app.get('/', (req, res) => {
            //res.send("hey man>> wassup?");
            res.sendFile('index.html');
        })
    }

    private setStaticDir() {
        this.app.use(express.static(path.join(__dirname, '../vc')))
    }

    public getRoutes(): void {
        this.home();
    }
}