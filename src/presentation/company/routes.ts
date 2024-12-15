import { Router } from "express";
import { AppContainer } from "../../container";
import { CompanyController } from "./controller";
import { COMPANY_TYPES } from "../../container/types/company.types";


export const companyRoutes = () => {
    const container = AppContainer.getInstance().getContainer();
    const router = Router();
    const companyController = container.get<CompanyController>(COMPANY_TYPES.CompanyController);
    router.post('/create', companyController.create);
    router.get('/all', companyController.getAll);
    return router


}