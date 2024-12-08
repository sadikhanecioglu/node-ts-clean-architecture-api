// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import express, { Router } from 'express';

interface ServerOptions {
    port?: number;
    routes: Router;
}


export function createServer(options: ServerOptions) {

    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use(options.routes);
    // Server initialization log
    app.listen(options.port, () => {
        console.log(`🚀 Server running at http://localhost:${options.port}`);
    });

    return app
}



