import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, Float, Int, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Product {
  @Field()
  @PrimaryKey()
  _id!: string;

  @Field(() => String)
  @Property({ type: "date" })
  createdAt = new Date();

  @Field(() => String)
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date();

  @Field()
  @Property({ type: "text" })
  name!: string;

  @Field()
  @Property({ type: "text" })
  category!: string;

  @Field()
  @Property({ type: "text" })
  image!: string;

  @Field()
  @Property({ type: "text" })
  storeName!: string;

  @Field(() => Float)
  @Property({ type: "number" })
  price!: number;

  @Field()
  @Property({ type: "number", nullable: true })
  pricePerPound?: number;

  @Field()
  @Property({ type: "number", nullable: true })
  weight?: number;
}
