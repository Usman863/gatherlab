import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
// import { BeforeInsert } from 'typeorm';
import { Transform, Type } from 'class-transformer';
import * as bcrypt from 'bcrypt';
import { UserInfo } from './userInfo.entity';
export type UserDocument = User & Document;

@Schema({
  timestamps: true
})
export class User {
  @Prop()
  name: string;

  @Prop({
    nullable: false,
    unique: true
  })
  username: string;

  @Prop({
    nullable: false,
    unique: true
  })
  email: string;

  @Prop({
    nullable: true,
    unique: true
  })
  phone: string;

  @Prop({
    nullable: false
  })
  password: string;
  @Prop({
    nullable: true
  })
  facebook_id: string;
  @Prop({
    nullable: true
  })
  instagram_id: string;
  @Prop({
    nullable: true
  })
  google_id: string;
  @Prop({
    nullable: true
  })
  access_token: string;

  @Prop({ nullable: false, type: mongoose.Schema.Types.ObjectId, ref: UserInfo.name,autopopulate: true })
  @Type(() => UserInfo)
  user_info: UserInfo;
}

export const UserSchema = SchemaFactory.createForClass(User);
UserSchema.pre<User>('save', function (next: Function) {
  const user = this;
  if (user.password) {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) return next(err);

      bcrypt.hash(user.password, salt, (err, hash) => {
        if (err) return next(err);

        // user.salt = salt;
        user.password = hash;
        next();
      });
    })
  }
});