import bcrypt from "bcrypt";

export const PORT = 5000;
export const JWT_SECRET = 'your-secret-key';
export const JWT_EXPIRES_IN = "8h";
export const JWT_ALGORITHM = "HS256";
export const SALT = bcrypt.genSaltSync(10);
