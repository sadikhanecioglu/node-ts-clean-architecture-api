import mongoose, { Schema, Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
interface IUser extends Document {
    id: string;
    username: string;
    email: string;
    password: string;
}

const userSchema: Schema = new Schema<IUser>({
    id: { type: String, required: true, default: uuidv4  },
    username: { type: String, required: true },
    email: { type: String, required: false },
    password: { type: String, required: true },
})

const UserModel = mongoose.model<IUser>('User', userSchema);

export { UserModel, IUser };