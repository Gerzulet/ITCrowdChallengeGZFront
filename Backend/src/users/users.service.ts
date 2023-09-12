import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }

  async findOne(username: string): Promise<any> {
    const user = await this.prisma.user.findFirst({
      where: {
        name: username
      }
    })
    return user;
  }
}
