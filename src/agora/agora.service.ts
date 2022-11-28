import { Injectable } from '@nestjs/common';
import { CreateAgoraDto } from './dto/create-agora.dto';
import { UpdateAgoraDto } from './dto/update-agora.dto';

@Injectable()
export class AgoraService {
  create(createAgoraDto: CreateAgoraDto) {
    return 'This action adds a new agora';
  }

  findAll() {
    return `This action returns all agora`;
  }

  findOne(id: number) {
    return `This action returns a #${id} agora`;
  }

  update(id: number, updateAgoraDto: UpdateAgoraDto) {
    return `This action updates a #${id} agora`;
  }

  remove(id: number) {
    return `This action removes a #${id} agora`;
  }
}
