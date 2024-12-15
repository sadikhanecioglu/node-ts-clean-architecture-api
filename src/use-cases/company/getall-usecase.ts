import { ICompanyRepository } from "../../domain/interfaces/company.repository";
import { FilterCompanyDto } from "../../presentation/dtos/company/filter.dto";


export class GetAllCompanyUseCase {

        private companyRepository: ICompanyRepository;
    
        constructor(companyRepository: ICompanyRepository) {
            this.companyRepository = companyRepository;
        }

            async execute(filter:FilterCompanyDto) {
                const createdCompany = await this.companyRepository.findAll();
                return createdCompany;
            }

}