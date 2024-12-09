import mongoose, { Schema, Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
interface IUser extends Document {
    id: string;
    username: string;
    email: string;
    password: string;
}

const userSchema: Schema = new Schema<IUser>({
    //id: { type: String, required: true, default: uuidv4  },
    username: { type: String, required: true },
    email: { type: String, required: false },
    password: { type: String, required: true },
})

// `toJSON` ile `_id` alanını `id` olarak yeniden adlandırıyoruz ve `__v` gibi gereksiz alanları kaldırıyoruz.
userSchema.set('toJSON', {
    transform: (doc, ret) => {
        ret.id = ret._id; // `_id` değerini `id` olarak atıyoruz
        delete ret._id;   // `_id` alanını kaldırıyoruz
        delete ret.__v;   // Mongoose tarafından eklenen `__v` alanını kaldırıyoruz
    },
});

const UserModel = mongoose.model<IUser>('User', userSchema);

export { UserModel, IUser };