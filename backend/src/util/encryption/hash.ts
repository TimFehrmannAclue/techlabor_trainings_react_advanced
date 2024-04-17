import bcrypt from 'bcrypt';
import {SALT} from "../../config";

export default function hash(password: string): string {
    try {
        return bcrypt.hashSync(password, SALT);
    } catch (error) {
        console.error('Error hashing password:', error);
        throw error;
    }
}
