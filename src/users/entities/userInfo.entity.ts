import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from './user.entity';
import { Transform, Type } from 'class-transformer';
export type UserInfoDocument = UserInfo & Document;

@Schema({
    timestamps: true
})
export class UserInfo {
    @Prop({
        nullable: true
    })
    birthday: string;
    @Prop({
        nullable: true
    })
    gender: string;
    @Prop({
        nullable: true
    })
    about: string;
    @Prop({
        nullable: true
    })
    height: string;
    @Prop({
        nullable: true
    })
    weight: string;
    @Prop({
        nullable: true
    })
    relationship: string;
    @Prop({
        nullable: true
    })
    looking_for: string[];
    @Prop({
        nullable: true
    })
    interesting: string[];
    @Prop({
        nullable: true
    })
    location: string;
    @Prop({
        nullable: true
    })
    address: string;
    @Prop({
        nullable: true
    })
    image: string;
}

export const UserInfoSchema = SchemaFactory.createForClass(UserInfo);