import { Container, ContainerModule } from 'inversify';
import { userModuleContainer } from './modules/user.module';
import { authModuleContainer } from './modules/auth.modules';

export class AppContainer {
    private static _instance: AppContainer | null = null; // Singleton instance
    private container: Container;

    private constructor() {
        this.container = new Container();
    }

    // Singleton Pattern
    public static getInstance(): AppContainer {
        if (!AppContainer._instance) {
            AppContainer._instance = new AppContainer();
        }
        return AppContainer._instance;
    }

    public loadModules(): void {
        this.container.load(authModuleContainer);
        this.container.load(userModuleContainer);

    }

    public getContainer(): Container {
        return this.container;
    }
}