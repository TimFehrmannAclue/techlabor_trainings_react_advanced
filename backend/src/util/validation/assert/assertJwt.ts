import {RESPONSE_TOKEN} from "../../../endpoint/localization/ResponseToken";
import jwt from "jsonwebtoken";
import {SALT} from "../../../config";

export function assertJwt(token: string | undefined): void | never {
    if (!token || token === '') {
        throw new Error(RESPONSE_TOKEN.INVALID_JWT);
    }

    jwt.verify(token, SALT, (err) => {
        if (err) {
            throw new Error(RESPONSE_TOKEN.INVALID_JWT);
        }
    });
}
