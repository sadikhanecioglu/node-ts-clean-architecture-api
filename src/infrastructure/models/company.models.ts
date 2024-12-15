import mongoose, { Schema } from "mongoose";
import { toJSONTransform } from "../../domain/helpers/mongo.tojson";


interface ICompany extends Document {
    id:string;
    name: string;
    domain: string;
    logo: string;
    description: string;
    ridrecturl: string;
    icons: [IIcon];
}

interface IIcon  {
    src: string;
    sizes: string;
    type: string;
}

// Icon Schema
const iconSchema: Schema = new Schema<IIcon>(
    {
        src: { type: String, required: true },
        sizes: { type: String, required: true },
        type: { type: String, required: true },
    },
    {
        _id: false, // `_id` alanını devre dışı bırak
    }
);

const companySchema: Schema = new Schema<ICompany>({
    name: { type: String, required: true },
    domain: { type: String, required: true },
    logo: { type: String, required: true },
    description: { type: String, required: true },
    ridrecturl: { type: String, required: true },
    icons: { type: [iconSchema], required: true },
});

companySchema.set('toJSON', toJSONTransform());

const CompanyModel = mongoose.model<ICompany>('Company', companySchema);

export { CompanyModel, ICompany,IIcon  };