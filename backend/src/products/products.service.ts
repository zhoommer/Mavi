import { HttpStatus, Injectable } from '@nestjs/common';
import { CustomExeption } from 'src/common/exception/custom-exception';
import { ResponseModel } from 'src/common/exception/response-model';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async getAllProducts(): Promise<ResponseModel> {
    const products = await this.prisma.products.findMany({
      include: {
        Products_Info: true,
      },
      orderBy: {
        id: 'desc',
      },
    });

    if (!products)
      throw new CustomExeption({
        message: 'No Products!',
        statusCode: HttpStatus.NOT_FOUND,
      });

    return {
      message: 'Products listed.',
      data: products,
    };
  }

  async getProductById(code: string): Promise<ResponseModel> {
    const product = await this.prisma.products.findFirst({
      where: {
        code: {
          contains: code,
        },
      },
      include: {
        Products_Info: true,
      },
    });

    if (!product)
      throw new CustomExeption({
        message: 'Product not found!',
        statusCode: HttpStatus.NOT_FOUND,
      });

    return {
      message: 'Product list',
      data: product,
    };
  }

  async getAllMenJeans(code: string): Promise<ResponseModel> {
    const jeans = await this.prisma.products.findMany({
      where: {
        code: {
          startsWith: code,
        },
      },
    });

    if (!jeans)
      throw new CustomExeption({
        message: 'Jeans not found!',
        statusCode: HttpStatus.NOT_FOUND,
      });

    return {
      message: 'Jeans listed.',
      data: jeans,
    };
  }

  async getAllWomenJeans(code: string): Promise<ResponseModel> {
    const jeans = await this.prisma.products.findMany({
      where: {
        code: {
          startsWith: code,
        },
      },
    });

    if (!jeans)
      throw new CustomExeption({
        message: 'Jeans not found!',
        statusCode: HttpStatus.NOT_FOUND,
      });

    return {
      message: 'Jeans listed.',
      data: jeans,
    };
  }

  async getProductStock(code: string, size: string, length: string) {
    const stock = await this.prisma.products.groupBy({
      by: [
        'title',
        'subtitle',
        'price',
        'discountedPrice',
        'code',
        'size',
        'length',
      ],
      where: {
        code: {
          contains: code,
        },
        size: {
          equals: size,
        },
        length: {
          equals: length,
        },
      },
      _count: {
        size: true,
        length: true,
      },
    });

    return {
      message: 'Product listed.',
      data: stock,
    };
  }
}
