import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ChatDocument = Chat & Document;

@Schema({
    timestamps: true
  })
export class Chat {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;

  
}

export const ChatSchema = SchemaFactory.createForClass(Chat);