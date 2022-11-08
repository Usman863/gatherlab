import { UserDto } from "src/users/dto/user.dto";
import { User } from "src/users/entities/user.entity";
import * as bcrypt from 'bcrypt';
export const toUserDto = (data: User): UserDto => {  
    const { username, email } = data;
    let userDto: UserDto = {  username, email,  };
    return userDto;
};

export const comparePasswords = async (userPassword, currentPassword) => {
    return await bcrypt.compare(currentPassword, userPassword);
  };
