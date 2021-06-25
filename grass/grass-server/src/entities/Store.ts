import { Field, Int, ObjectType } from "type-graphql";
import {
  Column,
  CreateDateColumn,
  Entity,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  BaseEntity,
  ObjectIdColumn,
  ObjectID,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Product } from "./Product";

@ObjectType()
@Entity()
export class Store extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => String)
  @Column({ unique: true })
  name!: string;

  @Field(() => String)
  @Column()
  logo!: string;

  @Field(() => String)
  @Column()
  address!: string;

  @OneToMany(() => Product, (product) => product.storeOwner)
  products: Product[];

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
