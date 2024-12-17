import { ContainerModule, interfaces } from "inversify";
import { AuthorizedMiddleware } from "../../presentation/middlewares/authentication.middlewares";

const appModuleContanier = new ContainerModule((bind: interfaces.Bind, unbind: interfaces.Unbind) => {
    bind(AuthorizedMiddleware).toSelf();
});

export { appModuleContanier };