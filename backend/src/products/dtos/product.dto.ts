import { Expose } from 'class-transformer';

export class ProductDto {
  @Expose()
  title: string;

  @Expose()
  subtitle: string;

  @Expose()
  price: number;

  @Expose()
  discountedPrice: number;

  @Expose()
  code: string;

  @Expose()
  size: string;

  @Expose()
  length: number;
}
