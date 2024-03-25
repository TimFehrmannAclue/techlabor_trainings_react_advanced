import {RESPONSE_TOKEN} from "../../../endpoint/localization/ResponseToken";
import hash from "../../encryption/hash";

export default function assertPassword(password: string, storedPasswordHash: string): void | never {
    const passwordHash = hash(password);
    const isMatchingPasswordHash = passwordHash === storedPasswordHash;
    if (!isMatchingPasswordHash) {
        throw new Error(RESPONSE_TOKEN.INVALID_PASSWORD);
    }
}
