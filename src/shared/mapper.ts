import { UserDto } from "src/users/dto/user.dto";
import { User } from "src/users/entities/user.entity";
import * as bcrypt from 'bcrypt';
import { UserInfo } from "src/users/entities/userInfo.entity";
import { CreateUserInfoDto } from "src/users/dto/create-user-info.dto";
export const toUserDto = (data: User): UserDto => {  
    const { username, email,name,access_token,user_info } = data;
    let userDto: UserDto = {  username, email, name,access_token,user_info };
    return userDto;
};

export const userInfoDto = (data: UserInfo): CreateUserInfoDto => {  
    let userDto: CreateUserInfoDto = data;
    return userDto;
};

export const comparePasswords = async (userPassword, currentPassword) => {
    return await bcrypt.compare(currentPassword, userPassword);
  };
