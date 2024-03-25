import getAssertedUserByEmail from "../../repository/user/UserRepository";
import {JWT_SECRET} from "../../config";
import jwt from 'jsonwebtoken';
import assertPassword from "../../util/validation/assert/assertPassword";

export default function getUserJwt(email: string, password: string): string | never {
    const user = getAssertedUserByEmail(email);
    assertPassword(password, user.passwordHash);

    // Generate JWT with user information
    return jwt.sign(user, JWT_SECRET, {expiresIn: '1h'});
}
