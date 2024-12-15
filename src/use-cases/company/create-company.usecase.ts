import { ICompanyRepository } from "../../domain/interfaces/company.repository";
import { CreateCompanyDto } from "../../presentation/dtos/company/create.dto";



export class CreateCompanyUseCase {

    private companyRepository: ICompanyRepository;

    constructor(companyRepository: ICompanyRepository) {
        this.companyRepository = companyRepository;
    }

    async execute(company: CreateCompanyDto) {
        const createdCompany = await this.companyRepository.create(company);
        return createdCompany;
    }
}