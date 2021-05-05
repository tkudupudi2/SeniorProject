import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  register: UserResponse;
  login: UserResponse;
  logout: Scalars['Boolean'];
  createProduct: Product;
  updateProduct?: Maybe<Product>;
  deleteProduct: Scalars['Boolean'];
};


export type MutationRegisterArgs = {
  options: UsernamePasswordInput;
};


export type MutationLoginArgs = {
  options: UsernamePasswordInput;
};


export type MutationCreateProductArgs = {
  weight?: Maybe<Scalars['Float']>;
  pricePerPound?: Maybe<Scalars['Float']>;
  category: Scalars['String'];
  storeName: Scalars['String'];
  image: Scalars['String'];
  price: Scalars['Float'];
  name: Scalars['String'];
};


export type MutationUpdateProductArgs = {
  storeName: Scalars['String'];
  image: Scalars['String'];
  price: Scalars['Float'];
  name: Scalars['String'];
  _id: Scalars['String'];
};


export type MutationDeleteProductArgs = {
  _id: Scalars['String'];
};

export type Product = {
  __typename?: 'Product';
  _id: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  name: Scalars['String'];
  category: Scalars['String'];
  image: Scalars['String'];
  storeName: Scalars['String'];
  price: Scalars['Float'];
  pricePerPound: Scalars['Float'];
  weight: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  product?: Maybe<Product>;
  products: Array<Product>;
};


export type QueryProductArgs = {
  _id: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  username: Scalars['String'];
  email: Scalars['String'];
  homeAddress: Scalars['String'];
  phoneNumber: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type UsernamePasswordInput = {
  username: Scalars['String'];
  password: Scalars['String'];
  email: Scalars['String'];
};

export type RegularProductFragment = (
  { __typename?: 'Product' }
  & Pick<Product, '_id' | 'name' | 'price' | 'storeName' | 'image'>
);

export type RegularUserFragment = (
  { __typename?: 'User' }
  & Pick<User, '_id' | 'username'>
);

export type LoginMutationVariables = Exact<{
  options: UsernamePasswordInput;
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & { user?: Maybe<(
      { __typename?: 'User' }
      & RegularUserFragment
    )>, errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'message' | 'field'>
    )>> }
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type RegisterMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
  email: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & RegularUserFragment
    )> }
  ) }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & RegularUserFragment
  )> }
);

export type ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsQuery = (
  { __typename?: 'Query' }
  & { products: Array<(
    { __typename?: 'Product' }
    & RegularProductFragment
  )> }
);

export const RegularProductFragmentDoc = gql`
    fragment RegularProduct on Product {
  _id
  name
  price
  storeName
  image
}
    `;
export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  _id
  username
}
    `;
export const LoginDocument = gql`
    mutation Login($options: UsernamePasswordInput!) {
  login(options: $options) {
    user {
      ...RegularUser
    }
    errors {
      message
      field
    }
  }
}
    ${RegularUserFragmentDoc}`;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument);
};
export const RegisterDocument = gql`
    mutation Register($username: String!, $password: String!, $email: String!) {
  register(options: {username: $username, password: $password, email: $email}) {
    errors {
      field
      message
    }
    user {
      ...RegularUser
    }
  }
}
    ${RegularUserFragmentDoc}`;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};
export const MeDocument = gql`
    query Me {
  me {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;

export function useMeQuery(options: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};
export const ProductsDocument = gql`
    query Products {
  products {
    ...RegularProduct
  }
}
    ${RegularProductFragmentDoc}`;

export function useProductsQuery(options: Omit<Urql.UseQueryArgs<ProductsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ProductsQuery>({ query: ProductsDocument, ...options });
};