export interface IUser {
    id: number,
    age: number,
    email: string,
    mobile: string,
    name: string,
    lastName: string
}

export type INewUser = Pick<IUser, "age" | "email" | "mobile" | "name" | "lastName">