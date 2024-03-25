import {RESPONSE_TOKEN} from "../../../endpoint/localization/ResponseToken";
import IUserDb from "../../../../type/backend/user/IUserDb";

export default function assertUser(user: IUserDb | undefined): IUserDb | never {
    if (!user) {
        throw new Error(RESPONSE_TOKEN.INVALID_EMAIL);
    }

    return user;
}
