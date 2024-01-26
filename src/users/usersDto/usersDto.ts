export type RequestUserDto = {
    email: string;
    name: string;
    password: string;
};

export type ResponseUserDto = {
    id: string;
    email: string;
    name: string;
};

export type ResponseUserWithPasswordDto = {
    id: string;
    email: string;
    name: string;
    password: string;
};
