import assertUser from "../../util/validation/assert/assertUser";
import hash from "../../util/encryption/hash";
import IUserDb from "../../../type/backend/user/IUserDb";

const UserRepository: { Users: IUserDb[] } = {
    Users: [
        {id: 1, email: 'user@mail.com', name: 'user', passwordHash: hash('userPassword')},
    ],
};

export default function getUserByEmailDb(email: string): IUserDb | never {
    const userDb = UserRepository.Users.find((u) => u.email === email);
    return assertUser(userDb);
}
