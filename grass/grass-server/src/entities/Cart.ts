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
  OneToOne,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Product } from "./Product";
import { User } from "./User";

@ObjectType()
@Entity()
export class Cart extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => [Product])
  @ManyToMany(() => Product)
  @JoinTable()
  products: Product[];

  @Field(() => [User])
  @ManyToMany(() => User)
  @JoinTable()
  users: User[];

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
