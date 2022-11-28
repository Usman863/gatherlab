import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AgoraService } from './agora.service';
import { CreateAgoraDto } from './dto/create-agora.dto';
import { UpdateAgoraDto } from './dto/update-agora.dto';

@Controller('agora')
export class AgoraController {
  constructor(private readonly agoraService: AgoraService) {}

  @Post()
  create(@Body() createAgoraDto: CreateAgoraDto) {
    return this.agoraService.create(createAgoraDto);
  }

  @Get()
  findAll() {
    return this.agoraService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.agoraService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAgoraDto: UpdateAgoraDto) {
    return this.agoraService.update(+id, updateAgoraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.agoraService.remove(+id);
  }
}
