import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class User {
  @Field()
  @PrimaryKey()
  _id!: string;

  @Field(() => String)
  @Property({ type: "date" })
  createdAt = new Date();

  @Field(() => String)
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date();

  @Field(() => String)
  @Property({ type: "text" })
  username!: string;

  @Property({ type: "text" })
  password!: string;

  @Field(() => String)
  @Property({ type: "text" })
  email!: string;

  @Field(() => String)
  @Property({ type: "text", nullable: true })
  homeAddress!: string;

  @Field(() => String)
  @Property({ type: "text", nullable: true })
  phoneNumber!: string;
}
