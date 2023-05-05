import { Controller, Get, HttpCode, Param, ParseIntPipe } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ApiResponse } from '@nestjs/swagger';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get('/all')
  @HttpCode(200)
  @ApiResponse({ status: 200, description: 'It returns all products' })
  @ApiResponse({
    status: 400,
    description: 'It returns if no products in database',
  })
  getAllProducts() {
    return this.productService.getAllProducts();
  }

  @Get('/:code')
  getProductById(@Param('code') code: string) {
    return this.productService.getProductById(code);
  }

  @Get('/men-jeans/:code')
  @HttpCode(200)
  getAllMenJeans(@Param('code') code: string) {
    return this.productService.getAllMenJeans(code);
  }

  @Get('/women-jeans/:code')
  getAllWomenJeans(@Param('code') code: string) {
    return this.productService.getAllWomenJeans(code);
  }

  @Get('/stock/:code/:size/:length')
  getProductStock(
    @Param('code') code: string,
    @Param('size') size: string,
    @Param('length') length: string,
  ) {
    return this.productService.getProductStock(code, size, length);
  }
}
