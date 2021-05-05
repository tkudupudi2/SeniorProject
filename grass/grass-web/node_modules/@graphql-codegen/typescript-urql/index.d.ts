import { Types, PluginValidateFn, PluginFunction } from '@graphql-codegen/plugin-helpers';
import { UrqlVisitor } from './visitor';
import { UrqlRawPluginConfig } from './config';
export declare const plugin: PluginFunction<UrqlRawPluginConfig, Types.ComplexPluginOutput>;
export declare const validate: PluginValidateFn<any>;
export { UrqlVisitor };
