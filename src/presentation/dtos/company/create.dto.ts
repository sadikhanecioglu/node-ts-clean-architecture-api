export class CreateCompanyDto {

    public readonly name: string;
    public readonly domain: string;
    public readonly logo: string;
    public readonly description: string;
    public readonly ridrecturl: string;
    public readonly icons: CreateIconDto[];
    private constructor(name: string, domain: string, logo: string, description: string, ridrecturl: string, icons: CreateIconDto[]) {
        this.name = name;
        this.domain = domain;
        this.logo = logo;
        this.description = description;
        this.ridrecturl = ridrecturl;
        this.icons = icons;
    }

    public static create(object: { [key: string]: any }): { errors: { field: string; message: string }[]; dto?: CreateCompanyDto } {
        const { name, domain, logo, description, ridrecturl, icons } = object;
        const errors: { field: string; message: string }[] = [];

        if (!name) errors.push({ field: 'name', message: 'Name is required' });
        if (!domain) errors.push({ field: 'domain', message: 'Domain is required' });
        if (!logo) errors.push({ field: 'logo', message: 'Logo is required' });
        if (!description) errors.push({ field: 'description', message: 'Description is required' });
        if (!ridrecturl) errors.push({ field: 'ridrecturl', message: 'Ridrecturl is required' });
        if (!icons) errors.push({ field: 'icons', message: 'Icons is required' });

        if (errors.length > 0) {            
            return { errors };
        }

        return { errors, dto: new CreateCompanyDto(name, domain, logo, description, ridrecturl, icons) };
    }
}

export class CreateIconDto {

    private readonly src: string;
    private readonly sizes: string;
    private readonly type: string;
    private constructor(src: string, sizes: string, type: string) {
        this.src = src;
        this.sizes = sizes;
        this.type = type;
    }

    public static create(src: string, sizes: string, type: string): CreateIconDto {
        return new CreateIconDto(src, sizes, type);
    }
}