import { CreateCompanyDto } from "../../presentation/dtos/company/create.dto";
import { CompanyEntity } from "../entities/company.enitity";

export interface ICompanyRepository {
    findAll(): Promise<CompanyEntity[]>;
    create(company: CreateCompanyDto): Promise<CompanyEntity>;
    update(company: CompanyEntity): Promise<void>;
    findCompanyByName(name: string): Promise<CompanyEntity | null>;
    findComapnyById(id: string): Promise<CompanyEntity | null>;

}