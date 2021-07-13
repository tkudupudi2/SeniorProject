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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartResolver = void 0;
const Cart_1 = require("src/entities/Cart");
const Product_1 = require("src/entities/Product");
const type_graphql_1 = require("type-graphql");
let CartResolver = class CartResolver {
    product(id) {
        return Cart_1.Cart.find();
    }
    addToCart(userId) {
        return null;
    }
};
__decorate([
    type_graphql_1.Query(() => [Product_1.Product]),
    __param(0, type_graphql_1.Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CartResolver.prototype, "product", null);
__decorate([
    type_graphql_1.Mutation(() => Cart_1.Cart, { nullable: true }),
    __param(0, type_graphql_1.Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CartResolver.prototype, "addToCart", null);
CartResolver = __decorate([
    type_graphql_1.Resolver()
], CartResolver);
exports.CartResolver = CartResolver;
//# sourceMappingURL=cart.js.map