export type UserDto = {
    id?: string
    email: string
    name: string
    password: string
}

export type ResponseCreateUserDto = {
    id: string
    email: string
    name: string
}