export class CompanyEntity {

    constructor(
        public readonly id: string | undefined, // Varsayılan olarak UUID oluşturulur
        public name: string,
        public domain: string,
        public logo: string,
        public description: string,
        public ridrecturl: string,
        public icons: IconEntity[],
    ) {


     }
}


export class IconEntity { 

    constructor(
        public src: string,
        public sizes: string,
        public type: string
    ) {

    }
}