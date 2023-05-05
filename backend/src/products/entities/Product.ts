import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export class Products {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  subtitle: string;

  @Column()
  price: number;

  @Column()
  discountedPrice: number;

  @Column()
  code: string;

  @Column()
  size: string;

  @Column()
  length: number;
}
