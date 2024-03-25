import bcrypt from 'bcrypt';

const salt = bcrypt.genSaltSync(10);
export default function hash(password: string): string {
    try {
        return bcrypt.hashSync(password, salt);
    } catch (error) {
        console.error('Error hashing password:', error);
        throw error;
    }
}
