import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Model } from 'mongoose';
import { Repository } from 'typeorm';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { Chat, ChatDocument } from './entities/chat.entity';

@Injectable()
export class ChatService {
  
  constructor(
    @InjectModel(Chat.name) private chatModel: Model<ChatDocument>,
    @InjectConnection() private connection: Connection
  ) {}


  async create(createChatDto: CreateChatDto): Promise<Chat> {
    const createdCat = new this.chatModel(createChatDto);
    return createdCat.save();
  }

  async findAll(): Promise<Chat[]> {
    return this.chatModel.find().exec();
  }

  findOne(id: string) {
    console.log(id,'   id to get');
    
    return this.chatModel.findById(id).exec();
  }

  update(id: number, updateChatDto: UpdateChatDto) {
    return `This action updates a #${id} chat`;
  }

  remove(id: number) {
    return `This action removes a #${id} chat`;
  }
}
