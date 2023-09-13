import { Injectable, NotAcceptableException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaClientUnknownRequestError, PrismaClientValidationError } from '@prisma/client/runtime/library';
import { Prisma } from '@prisma/client';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) { }


  create(createProductDto: CreateProductDto) {

    return this.prisma.product.create({
      data: {
        name: createProductDto.name,
        description: createProductDto.description,
        image_url: createProductDto.image_url,
        price: createProductDto.price,
        brandId: createProductDto.brandId
      }
    })
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

  async update(id: string, updateProductDto: UpdateProductDto) {

    try {
      await this.prisma.product.update({
        where: {
          id: id,
        },
        data: {
          ...updateProductDto,
        }
      })
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('Product not found')
      } else if (error instanceof PrismaClientValidationError) {
        throw new NotAcceptableException('Product property not allowed')
      }
    }

  }

  async remove(id: string) {
    try {
      await this.prisma.product.delete({
        where: {
          id: id,
        },
      })
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('Product not found')

      }
    }

  }
}
