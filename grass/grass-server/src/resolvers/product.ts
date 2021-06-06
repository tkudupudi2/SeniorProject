import { Resolver, Query, Ctx, Arg, Mutation } from "type-graphql";
import { Product } from "../entities/Product";

@Resolver()
export class ProductResolver {
  @Query(() => [Product])
  products(): Promise<Product[]> {
    return Product.find();
  }

  @Query(() => [Product])
  product(@Arg("id") id: string): Promise<Product | undefined> {
    return Product.findOne(id);
  }

  @Mutation(() => Product)
  async createProduct(
    @Arg("name") name: string,
    @Arg("price") price: number,
    @Arg("image") image: string,
    @Arg("storeName") storeName: string,
    @Arg("category") category: string,
    @Arg("pricePerPound", { nullable: true }) pricePerPound: number,
    @Arg("weight", { nullable: true }) weight: number
  ): Promise<Product> {
    return Product.create({
      name,
      price,
      image,
      storeName,
      category,
      pricePerPound,
      weight,
    }).save();
  }

  @Mutation(() => Product, { nullable: true })
  async updateProduct(
    @Arg("id") id: number,
    @Arg("name") name: string,
    @Arg("price") price: number,
    @Arg("image") image: string,
    @Arg("storeName") storeName: string
  ): Promise<Product | null> {
    const product = await Product.findOne(id);
    if (!product) {
      return null;
    }
    if (typeof name !== "undefined") {
      await Product.update({ id }, { name, price, image, storeName });
    }
    return product;
  }

  @Mutation(() => Boolean)
  async deleteProduct(@Arg("id") id: string): Promise<boolean> {
    await Product.delete(id);
    return true;
  }
}
