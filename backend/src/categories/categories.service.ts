import { HttpStatus, Injectable } from '@nestjs/common';
import { CustomExeption } from 'src/common/exception/custom-exception';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  async getCategories() {
    const categories = await this.prisma.womenJeanCategory.findMany();

    if (!categories)
      throw new CustomExeption({
        message: 'No Categories!',
        statusCode: HttpStatus.NOT_FOUND,
      });

    return {
      message: 'Categories Listed.',
      data: categories,
    };
  }
}
