import { Cart } from "src/entities/Cart";
import { Product } from "src/entities/Product";
import { User } from "src/entities/User";
import { Resolver, Query, Arg, Mutation } from "type-graphql";

@Resolver()
export class CartResolver {
  @Query(() => [Product])
  product(@Arg("id") id: string): Promise<Cart[] | undefined> {
    return Cart.find();
  }

  @Mutation(() => Cart, { nullable: true })
  addToCart(@Arg("id") userId: string): Promise<User | null> {
    return null;
  }
}
