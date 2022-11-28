import { IsNotEmpty } from 'class-validator';

export class LoginUserDto {
    @IsNotEmpty() readonly email: string;
    @IsNotEmpty() readonly password: string;
    readonly username: string;
    readonly access_token: string;
    readonly type:string
}
