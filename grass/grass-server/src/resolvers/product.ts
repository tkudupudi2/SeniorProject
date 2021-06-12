import { isAuth } from "../middleware/isAuth";
import {
  Resolver,
  Query,
  Ctx,
  Arg,
  Mutation,
  InputType,
  Field,
  UseMiddleware,
  Int,
  Float,
  FieldResolver,
  Root,
} from "type-graphql";
import { Product } from "../entities/Product";
import { cursorTo } from "readline";
import { getConnection } from "typeorm";

@InputType()
class ProductInput {
  @Field()
  name: string;
  @Field()
  price: number;
  @Field()
  image: string;
  @Field()
  category: string;
  @Field()
  storeId: number;
}

@Resolver(Product)
export class ProductResolver {
  @FieldResolver(() => String)
  priceFormat(@Root() root: Product) {
    return root.price.toFixed(2);
  }

  @Query(() => [Product])
  async products(
    @Arg("limit", () => Int) limit: number,
    @Arg("cursor", () => Float, { nullable: true }) cursor: number | null
  ): Promise<Product[]> {
    const realLimit = Math.min(25, limit);
    const qb = getConnection()
      .getRepository(Product)
      .createQueryBuilder("p")
      .orderBy("price", "DESC")
      .take(realLimit);

    if (cursor) {
      qb.where("price < :cursor", { cursor });
    }

    return qb.getMany();
  }

  @Query(() => [Product])
  product(@Arg("id") id: string): Promise<Product | undefined> {
    return Product.findOne(id);
  }

  @Mutation(() => Product)
  @UseMiddleware(isAuth)
  async createProduct(@Arg("input") input: ProductInput): Promise<Product> {
    return Product.create({
      ...input,
    }).save();
  }

  @Mutation(() => Product, { nullable: true })
  async updateProduct(
    @Arg("input") input: ProductInput,
    @Arg("id") id: number
  ): Promise<Product | null> {
    const product = await Product.findOne(id);
    if (!product) {
      return null;
    }
    if (typeof input.name !== "undefined") {
      await Product.update({ id }, input);
    }
    return product;
  }

  @Mutation(() => Boolean)
  async deleteProduct(@Arg("id") id: string): Promise<boolean> {
    await Product.delete(id);
    return true;
  }
}
