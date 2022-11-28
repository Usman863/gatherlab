import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserInfoDto } from './dto/create-user-info.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { LoginStatus } from 'src/auth/interfaces/login-status.interface';
import { ApiBody, ApiTags } from '@nestjs/swagger';



@Controller('api/v1/auth/user')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }
  @ApiTags('auth')
  @ApiBody({
    type: CreateUserDto,
    description: "create user ",
    examples: {
      a: {
        summary: "Empty Body",
        description: "Description for when an empty body is used",
        value: {} as CreateUserDto
      },
      b: {
        summary: "Request Body",
        description: "Request body is used as the greeting",
        value: {
          'username': 'string',
          'password': 'string',
          'email': 'string',
          'name': 'string',
          'access_token': 'string',
          'facebook_id': 'string',
          'instagram_id': 'string',
          'google_id': 'string',
          'birthday': 'string',
          'gender': 'string',
          'about': 'string',
          'height': 'string',
          'weight': 'string',
          'relationship': 'string',
          'looking_for': 'array',
          'interesting': 'array',
          'location': 'string',
          'address': 'string',
          'image': 'string',
        }
      }
    }

  })
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
  @ApiTags('auth')
  @ApiBody({
    type: CreateUserDto,
    description: "create user ",
    examples: {
      a: {
        summary: "Empty Body",
        description: "Description for when an empty body is used",
        value: {} as CreateUserDto
      },
      b: {
        summary: "Request Body",
        description: "Request body is used as the greeting",
        value: {
          'username': 'string',
          'password': 'string',
          'email': 'string',
          'name': 'string',
          'access_token': 'string',
          'facebook_id': 'string',
          'instagram_id': 'string',
          'google_id': 'string',
          'birthday': 'string',
          'gender': 'string',
          'about': 'string',
          'height': 'string',
          'weight': 'string',
          'relationship': 'string',
          'looking_for': 'array',
          'interesting': 'array',
          'location': 'string',
          'address': 'string',
          'image': 'string',
        }
      }
    }

  })
  @Put(":user_id")
  updateUserInfo(@Param('user_id') user_id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateUserInfo(user_id, updateUserDto);
  }

  @Get(':user_id')
  findOne(@Param('user_id') user_id: string) {
    return this.usersService.findOne(user_id);
  }
  @ApiTags('auth')
  @ApiBody({
    type: CreateUserDto,
    description: "create user info ",
    examples: {
      a: {
        summary: "Empty Body",
        description: "Description for when an empty body is used",
        value: {} as CreateUserDto
      },
      b: {
        summary: "Request Body",
        description: "Request body is used as the greeting",
        value: {
          'birthday': 'string',
          'gender': 'string',
          'about': 'string',
          'height': 'string',
          'weight': 'string',
          'relationship': 'string',
          'looking_for': 'array',
          'interesting': 'array',
          'location': 'string',
          'address': 'string',
          'image': 'string',
        }
      }
    }

  })
  @Post('info')
  addInfo(@Body() createUserinfoDto: CreateUserInfoDto) {
    return this.usersService.createUserInfo(createUserinfoDto);
  }
  @ApiTags('auth')
  @ApiBody({
    type: LoginUserDto,
    description: "login user ",
    examples: {
      a: {
        summary: "Email Body",
        description: "Login via email and password",
        value: {
          'email': 'string',
          'password': 'string',
        } as LoginUserDto
      },
      b: {
        summary: "Username Body",
        description: "Login via username and password",
        value: {
          'username': 'string',
          'password': 'string',
        } as LoginUserDto
      }
    }

  })
  @Post('login')
  public async login(@Body() loginUserDto: LoginUserDto): Promise<LoginStatus> {
    return await this.usersService.login(loginUserDto);
  }

}
