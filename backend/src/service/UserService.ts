import getAssertedUserByEmail from "../repository/UserRepository";
import {JWT_ALGORITHM, JWT_EXPIRES_IN, JWT_SECRET} from "../config";
import jwt from 'jsonwebtoken';
import assertPassword from "../util/validation/assertPassword";

export default function getUserJwt(email: string, password: string): string | never {
    const user = getAssertedUserByEmail(email);
    assertPassword(password, user.passwordHash);

    // Generate JWT with user information
    return jwt.sign(user, JWT_SECRET, {expiresIn: JWT_EXPIRES_IN, algorithm: JWT_ALGORITHM});
}
