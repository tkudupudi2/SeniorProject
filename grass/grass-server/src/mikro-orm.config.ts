import { __prod__ } from "./constants";
import { MikroORM } from "@mikro-orm/core";
import path from "path";
import { User } from "./entities/User";
import { Product } from "./entities/Product";

console.log(__dirname);
export default {
  migrations: {
    path: path.join(__dirname, "/migrations"), // path to the folder with migrations
    pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
  },
  entities: [User, Product],
  clientUrl:
    "mongodb+srv://admin:Password@cluster0.tamvy.mongodb.net/user_profile?retryWrites=true&w=majority",
  debug: !__prod__,
  type: "mongo",
  ensureIndexes: true,
} as Parameters<typeof MikroORM.init>[0];
