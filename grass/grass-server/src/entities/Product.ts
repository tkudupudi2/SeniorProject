import {
  Entity,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  BaseEntity,
  ObjectIdColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Field, Float, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Product extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;

  @Field()
  @Column()
  name!: string;

  @Field()
  @Column()
  category!: string;

  @Field()
  @Column()
  image!: string;

  @Field()
  @Column()
  storeName!: string;

  @Field(() => Float)
  @Column()
  price!: number;

  @Field()
  @Column({ nullable: true })
  pricePerPound?: number;

  @Field()
  @Column({ nullable: true })
  weight?: number;
}
