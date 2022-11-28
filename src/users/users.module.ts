import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/user.entity';
import { UserInfo, UserInfoSchema } from './entities/userInfo.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema },{ name: UserInfo.name, schema: UserInfoSchema }])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
