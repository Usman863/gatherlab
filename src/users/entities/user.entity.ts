import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcrypt';
export type UserDocument = User & Document;

@Schema({
    timestamps: true
  })
export class User {
  @Prop()
  name: string;


  @Prop({ 
    // type: 'varchar', 
    nullable: false, 
    unique: true 
}) 
username: string;
@Prop({ 
    // type: 'varchar', 
    nullable: false 
}) 
password: string;  
@Prop({ 
    // type: 'varchar', 
    nullable: false 
}) 

email: string;
@BeforeInsert()  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);  
}

  
}

export const UserSchema = SchemaFactory.createForClass(User);