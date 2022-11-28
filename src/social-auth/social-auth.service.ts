import { Injectable } from '@nestjs/common';
import { CreateSocialAuthDto } from './dto/create-social-auth.dto';
import { UpdateSocialAuthDto } from './dto/update-social-auth.dto';

@Injectable()
export class SocialAuthService {
  create(createSocialAuthDto: CreateSocialAuthDto) {
    return 'This action adds a new socialAuth';
  }

  findAll() {
    return `This action returns all socialAuth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} socialAuth`;
  }

  update(id: number, updateSocialAuthDto: UpdateSocialAuthDto) {
    return `This action updates a #${id} socialAuth`;
  }

  remove(id: number) {
    return `This action removes a #${id} socialAuth`;
  }
}
