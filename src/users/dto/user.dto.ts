import { IsNotEmpty,IsEmail } from 'class-validator';
import { UserInfo } from '../entities/userInfo.entity';

export class UserDto {  
    // @IsNotEmpty()  id: string;
    @IsNotEmpty()  username: string;
    @IsNotEmpty()  @IsEmail()  email: string;
    name:string;
    access_token:string;
    @IsNotEmpty() user_info: UserInfo;
}
