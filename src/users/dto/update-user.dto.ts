import { PartialType } from '@nestjs/mapped-types';
import { User } from '../entities/user.entity';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    birthday: string;
    gender: string;
    about: string;
    height: string;
    weight: string;
    relationship: string;
    looking_for: string;
    interesting: string;
    location: string;
    address: string;
    image: string;
}
