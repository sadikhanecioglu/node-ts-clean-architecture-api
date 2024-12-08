import { AppContainer } from "./container";
import { connectMongoDb } from "./infrastructure/database/mongo.db";
import { AppRoutes } from "./presentation/routes";
import { createServer } from "./presentation/start.engine";

const port = +(process.env.PORT || "3000");
// Load DI Container and Modules
const appContainer = AppContainer.getInstance();
appContainer.loadModules();
connectMongoDb({ uri: process.env.MONGO_DB_URL as string, database: process.env.MONGO_DATABASE as string });
createServer({ port, routes: AppRoutes.routes });