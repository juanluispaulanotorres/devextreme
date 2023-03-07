export interface IUser {
    id: number,
    firstname: string,
    lastName: string,
    prefix: string
    position: number,
    picture?: string
    birthDate?: Date,
    hireDate?: Date,
    address?: string,
    notes?: string
}