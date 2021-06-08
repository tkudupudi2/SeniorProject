import * as React from "react";
import { Layout } from "../components/Layout";
import NextLink from "next/link";
import { Button, Link } from "@chakra-ui/react";

const Admin = () => {
  return (
    <Layout>
      <NextLink href="/create-product">
        <Button mt={4} type="button" colorScheme="whatsapp">
          create product
        </Button>
      </NextLink>
    </Layout>
  );
};

export default Admin;
