
export class FilterCompanyDto {

    constructor(
        readonly name?: string,
        readonly domain?: string
    ) {

    }

    static create(object: { [key: string]: any }): { errors: { field: string; message: string }[]; dto?: FilterCompanyDto } {
        const { name, domain } = object;
        const errors: { field: string; message: string }[] = [];
        if (errors.length > 0) {
            return { errors };
        }
        return { errors, dto: new FilterCompanyDto(name, domain) };
    }

}