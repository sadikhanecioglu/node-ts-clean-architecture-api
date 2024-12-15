import { ContainerModule, interfaces } from "inversify";
import { ICompanyRepository } from "../../domain/interfaces/company.repository";
import { CompanyMongoRepository } from "../../infrastructure/repositories/company.mongo.repository";
import { COMPANY_TYPES } from "../types/company.types";
import { CreateCompanyUseCase } from "../../use-cases/company/create-company.usecase";
import { CompanyController } from "../../presentation/company/controller";
import { GetAllCompanyUseCase } from "../../use-cases/company/getall-usecase";


const companyModuleContainer = new ContainerModule((bind: interfaces.Bind, unbind: interfaces.Unbind) => {

    bind<ICompanyRepository>(COMPANY_TYPES.ICompanyRepository).to(CompanyMongoRepository);

    bind<CreateCompanyUseCase>(COMPANY_TYPES.CreateCompanyUseCase).toDynamicValue(context => {
        const companyRepository = context.container.get<ICompanyRepository>(COMPANY_TYPES.ICompanyRepository);
        return new CreateCompanyUseCase(companyRepository);
    });

    bind<GetAllCompanyUseCase>(COMPANY_TYPES.GetAllCompanyUseCase).toDynamicValue(context => { 
        const companyRepository = context.container.get<ICompanyRepository>(COMPANY_TYPES.ICompanyRepository);
        return new GetAllCompanyUseCase(companyRepository);
    });

    bind<CompanyController>(COMPANY_TYPES.CompanyController).to(CompanyController);
    
});
export { companyModuleContainer };