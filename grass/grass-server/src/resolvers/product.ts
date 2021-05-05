import { Resolver, Query, Ctx, Arg, Mutation } from "type-graphql";
import { Product } from "../entities/Product";
import { MyContext } from "../types";

@Resolver()
export class ProductResolver {
  @Query(() => Product, { nullable: true })
  product(
    @Arg("_id") _id: string,
    @Ctx() { em }: MyContext
  ): Promise<Product | null> {
    return em.findOne(Product, { _id: _id });
  }

  @Query(() => [Product])
  products(@Ctx() { em }: MyContext): Promise<Product[]> {
    return em.find(Product, {});
  }

  @Mutation(() => Product)
  async createProduct(
    @Arg("name") name: string,
    @Arg("price") price: number,
    @Arg("image") image: string,
    @Arg("storeName") storeName: string,
    @Arg("category") category: string,
    @Arg("pricePerPound", { nullable: true }) pricePerPound: number,
    @Arg("weight", { nullable: true }) weight: number,
    @Ctx() { em }: MyContext
  ): Promise<Product | null> {
    const product = em.create(Product, {
      name: name,
      price: price,
      image: image,
      storeName: storeName,
      pricePerPound: pricePerPound,
      weight: weight,
      category: category,
    });
    await em.persistAndFlush(product);
    return product;
  }

  @Mutation(() => Product, { nullable: true })
  async updateProduct(
    @Arg("_id") _id: string,
    @Arg("name") name: string,
    @Arg("price") price: number,
    @Arg("image") image: string,
    @Arg("storeName") storeName: string,
    @Ctx() { em }: MyContext
  ): Promise<Product | null> {
    const product = await em.findOne(Product, { _id });
    if (!product) {
      return null;
    }
    if (typeof name !== "undefined") {
      product.name = name;
      product.price = price;
      product.image = image;
      product.storeName = storeName;
      await em.persistAndFlush(product);
    }
    return product;
  }

  @Mutation(() => Boolean)
  async deleteProduct(
    @Arg("_id") _id: string,
    @Ctx() { em }: MyContext
  ): Promise<boolean> {
    await em.nativeDelete(Product, { _id });
    return true;
  }
}
