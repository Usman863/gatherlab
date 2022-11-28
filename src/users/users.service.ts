import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { InjectRepository } from '@nestjs/typeorm';
import { Model } from 'mongoose';
import { LoginStatus } from 'src/auth/interfaces/login-status.interface';
import { comparePasswords, toUserDto, userInfoDto } from 'src/shared/mapper';
import { Repository } from 'typeorm';
import { CreateUserInfoDto } from './dto/create-user-info.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDto } from './dto/user.dto';
import { User, UserDocument } from './entities/user.entity';
import { UserInfo, UserInfoDocument } from './entities/userInfo.entity';

@Injectable()
export class UsersService {

  // constructor(
  //   @InjectRepository(User)
  //   private readonly userRepo: Repository<User>,
  // ) {}

  constructor(
    @InjectModel(User.name) private userRepo: Model<UserDocument>,
    @InjectModel(UserInfo.name) private userInfoRepo: Model<UserInfoDocument>,
    // @InjectConnection() private connection: Connection
  ) { }

  async findOne(id: string) {
    const user = await (await this.userRepo.findById(id)).populate('user_info');
    return (user);
  }

  async findByLogin({ username, password, email }: LoginUserDto): Promise<UserDto> {
    let user: any;
    if (email) {
      user = await this.userRepo.findOne({ where: { email } }).populate("user_info");
    } else {
      user = await this.userRepo.findOne({ where: { username } }).populate("user_info");
    }
    if (!user) {
      throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
    }

    // compare passwords
    const areEqual = await comparePasswords(user.password, password);

    if (!areEqual) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }

    return toUserDto(user);
  }

  // async findByPayload({ username }: any): Promise<UserDto> {
  //   return await this.findOne({ where: { username } });
  // }

  async create(userDto: CreateUserDto): Promise<UserDto> {
    try {
      const userinfo: any = await this.userInfoRepo.create({});
      userDto.user_info = userinfo._id
      let user: any = await this.userRepo.create(userDto);
      return toUserDto(user);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async createUserInfo(userDto: CreateUserInfoDto): Promise<UserInfo> {
    try {
      const user: UserInfo = await this.userInfoRepo.create(userDto);
      return userInfoDto(user);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async updateUserInfo(user_id: string, updateUserDto: UpdateUserDto): Promise<UpdateUserDto> {
    try {
      let { name, username, access_token, email } = updateUserDto
      let userdata: UserDto = await this.userRepo.findByIdAndUpdate(user_id, { name, username, access_token, email })
      let user: any = await this.userRepo.findById(user_id)
      await this.userInfoRepo.findOneAndUpdate(user.user_info.toString(), updateUserDto);
      let data: any = await this.findOne(user_id);
      return data
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async login(loginUserDto: LoginUserDto): Promise<any> {
    // find user in db
    const user = await this.findByLogin(loginUserDto);

    // generate and sign token
    // const token = this._createToken(user);

    return {
      user
      // username: user.username,
      // ...token,
    };
  }

}
