import { Controller, Get, Post, Body, Patch, Res, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get('search')
  findOne(@Query() filter: { name: string, description: string }) {
    return this.productsService.findOne(filter);
  }

  // @UseGuards(AuthGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return await this.productsService.update(id, updateProductDto);
  }


  // @UseGuards(AuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: any) {
    res.send(await this.productsService.remove(id))
  }
}
