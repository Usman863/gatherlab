

import { IsNotEmpty,IsEmail } from 'class-validator';
import { UserInfo } from '../entities/userInfo.entity';

export class CreateUserDto {  
    @IsNotEmpty()  username: string;
    @IsNotEmpty()  password: string;
    @IsNotEmpty()  @IsEmail()  email: string;
    name: string;
    access_token: string;
    facebook_id: string;
    instagram_id: string;
    google_id: string;
    @IsNotEmpty()  user_info: UserInfo;
}
