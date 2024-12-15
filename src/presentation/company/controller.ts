
import { inject, injectable } from "inversify";
import { BaseController } from "../abstraction/base.controller";
import { CreateCompanyUseCase } from "../../use-cases/company/create-company.usecase";
import { COMPANY_TYPES } from "../../container/types/company.types";
import { Request, Response } from 'express';
import { CreateCompanyDto, CreateIconDto } from "../dtos/company/create.dto";
import { FilterCompanyDto } from "../dtos/company/filter.dto";
import { GetAllCompanyUseCase } from "../../use-cases/company/getall-usecase";

@injectable()
export class CompanyController extends BaseController {

    private createCompany: CreateCompanyUseCase;
    private getAllCompany: GetAllCompanyUseCase;

    constructor(@inject(COMPANY_TYPES.CreateCompanyUseCase) createCompany: CreateCompanyUseCase, @inject(COMPANY_TYPES.GetAllCompanyUseCase) getAllCompany: GetAllCompanyUseCase) {
        super();
        this.createCompany = createCompany;
        this.getAllCompany = getAllCompany;
    }

    create = async (req: Request, res: Response): Promise<void> => {
        if (!req.body) {

            res.status(400).json({ message: 'No data provided' });
            return;
        }

        const result = CreateCompanyDto.create(req.body);

        if (result.errors.length > 0) {
            res.status(400).json(result.errors);
            return;
        }


        if (!result.dto) {
            res.status(500).json({ message: 'Internal server error' });
            return
        }

        this.createCompany.execute(result.dto).then((result) => {
            res.status(200).json(result);
        }).catch((error) => {
            this.ErroStatus(error, res);
        });

    }

    getAll = async (req: Request, res: Response): Promise<void> => {
    
    
        const result = FilterCompanyDto.create(req.query);

        if (result.errors.length > 0) {
            res.status(400).json(result.errors);
            return;
        }

        if (!result.dto) {
            res.status(500).json({ message: 'Internal server error' });
            return
        }

        this.getAllCompany.execute(result.dto).then((result) => {
            res.status(200).json(result);
        }).catch((error) => {
            this.ErroStatus(error, res);
        });

    }


}