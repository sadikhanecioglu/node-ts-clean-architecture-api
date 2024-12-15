

const COMPANY_TYPES = {
    ICompanyRepository: Symbol.for("ICompanyRepository"),
    CreateCompanyUseCase: Symbol.for("CreateCompanyUseCase"),
    GetAllCompanyUseCase: Symbol.for("GetAllCompanyUseCase"),
    CompanyController: Symbol.for("CompanyController"),

}

export { COMPANY_TYPES };