import { Box, Flex, Link, Button } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import router from "next/dist/next-server/lib/router/router";
import * as React from "react";
import { InputField } from "../components/InputField";
import { Wrapper } from "../components/Wrapper";
import { toErrorMap } from "../utils/toErrorMap";
import login from "./login";
import NextLink from "next/link";
import { useCreateProductMutation, useMeQuery } from "../generated/graphql";
import { useRouter } from "next/router";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrqlClient";
import { Layout } from "../components/Layout";
import { useEffect } from "react";
import { useIsAuth } from "../utils/useIsAuth";

const CreateProduct = () => {
  const router = useRouter();
  useIsAuth();
  const [, createProduct] = useCreateProductMutation();
  return (
    <Layout variant="small">
      <Formik
        initialValues={{
          name: "",
          category: "",
          image: "",
          storeId: 0,
          price: 0,
        }}
        onSubmit={async (values, { setErrors }) => {
          const { error } = await createProduct({ input: values });
          if (!error) {
            router.push("/");
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField name="name" placeholder="name" label="Item Name" />
            <Box mt={4}>
              <InputField
                name="category"
                placeholder="category"
                label="Category"
              />
            </Box>
            <Box mt={4}>
              <InputField name="image" placeholder="image" label="Image URL" />
            </Box>
            <Box mt={4}>
              <InputField
                name="storeId"
                placeholder="store id"
                label="Store ID"
                type="number"
              />
            </Box>
            <Box mt={4}>
              <InputField
                name="price"
                placeholder="price"
                label="Price"
                type="number"
                step="0.01"
              />
            </Box>
            <Button
              mt={4}
              type="submit"
              isLoading={isSubmitting}
              colorScheme="whatsapp"
            >
              create item
            </Button>
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient)(CreateProduct);
