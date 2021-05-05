"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const path_1 = __importDefault(require("path"));
const User_1 = require("./entities/User");
const Product_1 = require("./entities/Product");
console.log(__dirname);
exports.default = {
    migrations: {
        path: path_1.default.join(__dirname, "/migrations"),
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    entities: [User_1.User, Product_1.Product],
    clientUrl: "mongodb+srv://admin:Password@cluster0.tamvy.mongodb.net/user_profile?retryWrites=true&w=majority",
    debug: !constants_1.__prod__,
    type: "mongo",
    ensureIndexes: true,
};
//# sourceMappingURL=mikro-orm.config.js.map