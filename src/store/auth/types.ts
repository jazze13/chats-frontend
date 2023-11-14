import { UserDto } from "../../shared/types/types";

export interface SignupReqDto {
    username: string;
    password: string;
}

export interface SignupResDto {
    token: string;
    subject: UserDto;
}