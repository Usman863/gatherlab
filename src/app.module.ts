import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ChatModule } from './chat/chat.module';
import { StreamingModule } from './streaming/streaming.module';
import { UsersModule } from './users/users.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [ChatModule, StreamingModule,MongooseModule.forRoot('mongodb://localhost/datingapp')//AuthModule
  //   TypeOrmModule.forRoot({
  //   type: 'mysql',
  //   host: 'localhost',
  //   port: 3306,
  //   username: 'root',
  //   password: '',
  //   database: 'devringtok',
  //   entities: [],
  //   autoLoadEntities:true,
  //   synchronize: true,//Setting synchronize: true shouldn't be used in production - otherwise you can lose production data.
  // })
  ],
})
export class AppModule {
  // constructor(private dataSource: DataSource) {}
}
