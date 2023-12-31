import { Controller, Get, Post, Body, Patch, Res, Param, Delete, Query, UseGuards, HttpCode, HttpStatus } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  @Post()
  async create(@Body() createProductDto: CreateProductDto, @Res() res: any) {
    await this.productsService.create(createProductDto)
    res.send({ message: "Product Created" })
  }

  @HttpCode(HttpStatus.OK)
  @Get()
  async findAll() {
    return await this.productsService.findAll();
  }

  @HttpCode(HttpStatus.OK)
  @Get('search')
  async findOne(@Query() filter: { name: string, description: string }) {
    return await this.productsService.findOne(filter);
  }

  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto, @Res() res: any) {
    await this.productsService.update(id, updateProductDto);
    res.send({ message: "Product has been modified" })
  }


  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: any) {
    await this.productsService.remove(id)
    res.send({ message: "Product deleted" })
  }
}
