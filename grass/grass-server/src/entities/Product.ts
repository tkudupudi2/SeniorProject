import {
  Entity,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  BaseEntity,
  ObjectIdColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
} from "typeorm";
import { Field, Float, ObjectType } from "type-graphql";
import { Store } from "./Store";

@ObjectType()
@Entity()
export class Product extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

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
  storeId: number;

  @ManyToOne(() => Store, (store) => store.products)
  storeOwner: Store;

  @Field()
  @Column({ type: "float" })
  price!: number;

  @Field()
  @Column({ default: 0 })
  pricePerPound!: number;

  @Field()
  @Column({ default: 0 })
  weight!: number;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
