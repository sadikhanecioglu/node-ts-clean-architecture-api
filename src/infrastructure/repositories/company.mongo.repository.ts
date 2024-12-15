import { CompanyEntity } from "../../domain/entities/company.enitity";
import { ICompanyRepository } from "../../domain/interfaces/company.repository";
import { CreateCompanyDto } from "../../presentation/dtos/company/create.dto";
import { CompanyModel } from "../models/company.models";

export class CompanyMongoRepository implements ICompanyRepository {


    async findAll(): Promise<CompanyEntity[]> {
       return await CompanyModel.find();
    }
    async create(company: CreateCompanyDto): Promise<CompanyEntity> {
        const companyEntity = new CompanyModel({
            name: company.name,
            domain: company.domain,
            logo: company.logo,
            description: company.description,
            ridrecturl: company.ridrecturl,
            icons: company.icons
        });
        return await companyEntity.save();
    }
    async update(company: CompanyEntity): Promise<void> {
        await CompanyModel.updateOne({ id: company.id }, company);
    }
    async findCompanyByName(name: string): Promise<CompanyEntity | null> {
        return await CompanyModel.findOne({ name });
    }
    async findComapnyById(id: string): Promise<CompanyEntity | null> {
        return await CompanyModel.findById(id);
    }
}