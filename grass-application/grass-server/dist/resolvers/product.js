"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Product_1 = require("../entities/Product");
let ProductResolver = class ProductResolver {
    product(_id, { em }) {
        return em.findOne(Product_1.Product, { _id: _id });
    }
    products({ em }) {
        return em.find(Product_1.Product, {});
    }
    createProduct(name, price, image, storeName, category, pricePerPound, weight, { em }) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = em.create(Product_1.Product, {
                name: name,
                price: price,
                image: image,
                storeName: storeName,
                pricePerPound: pricePerPound,
                weight: weight,
                category: category,
            });
            yield em.persistAndFlush(product);
            return product;
        });
    }
    updateProduct(_id, name, price, image, storeName, { em }) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield em.findOne(Product_1.Product, { _id });
            if (!product) {
                return null;
            }
            if (typeof name !== "undefined") {
                product.name = name;
                product.price = price;
                product.image = image;
                product.storeName = storeName;
                yield em.persistAndFlush(product);
            }
            return product;
        });
    }
    deleteProduct(_id, { em }) {
        return __awaiter(this, void 0, void 0, function* () {
            yield em.nativeDelete(Product_1.Product, { _id });
            return true;
        });
    }
};
__decorate([
    type_graphql_1.Query(() => Product_1.Product, { nullable: true }),
    __param(0, type_graphql_1.Arg("_id")),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "product", null);
__decorate([
    type_graphql_1.Query(() => [Product_1.Product]),
    __param(0, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "products", null);
__decorate([
    type_graphql_1.Mutation(() => Product_1.Product),
    __param(0, type_graphql_1.Arg("name")),
    __param(1, type_graphql_1.Arg("price")),
    __param(2, type_graphql_1.Arg("image")),
    __param(3, type_graphql_1.Arg("storeName")),
    __param(4, type_graphql_1.Arg("category")),
    __param(5, type_graphql_1.Arg("pricePerPound", { nullable: true })),
    __param(6, type_graphql_1.Arg("weight", { nullable: true })),
    __param(7, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, String, String, String, Number, Number, Object]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "createProduct", null);
__decorate([
    type_graphql_1.Mutation(() => Product_1.Product, { nullable: true }),
    __param(0, type_graphql_1.Arg("_id")),
    __param(1, type_graphql_1.Arg("name")),
    __param(2, type_graphql_1.Arg("price")),
    __param(3, type_graphql_1.Arg("image")),
    __param(4, type_graphql_1.Arg("storeName")),
    __param(5, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number, String, String, Object]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "updateProduct", null);
__decorate([
    type_graphql_1.Mutation(() => Boolean),
    __param(0, type_graphql_1.Arg("_id")),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "deleteProduct", null);
ProductResolver = __decorate([
    type_graphql_1.Resolver()
], ProductResolver);
exports.ProductResolver = ProductResolver;
//# sourceMappingURL=product.js.map