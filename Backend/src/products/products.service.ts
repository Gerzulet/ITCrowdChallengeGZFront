import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) { }


  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  findAll() {
    return this.prisma.product.findMany({
      include: {
        brand: true
      }
    })
  }

  findOne(filter: { name: string, description: string }) {
    return this.prisma.product.findMany({
      where: {
        OR: [
          {
            name: {
              contains: filter.name,
            },
          },
          {
            description: {
              contains: filter.description,
            }
          }
        ]
      }
    })
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.prisma.product.update({
      where: {
        id: id,
      },
      data: {
        ...updateProductDto,
      }
    })
  }

  remove(id: number) {
    return this.prisma.product.delete({
      where: {
        id: id,
      },
    })
  }
}
