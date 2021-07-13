import {
  Box,
  SimpleGrid,
  Divider,
  Button,
  Grid,
  GridItem,
  Flex,
  Spinner,
  Image,
  Center,
  Text,
  Icon,
  IconButton,
  Heading,
  useColorModeValue,
  extendTheme,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { FaPlus, FaShoppingCart } from "react-icons/fa";
import { withUrqlClient } from "next-urql";
import * as React from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import { Layout } from "../components/Layout";
import { useMeQuery, useProductsQuery } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";
import { isServer } from "../utils/isServer";

export const Recipes = () => {
  const [{ data, fetching }] = useProductsQuery({
    variables: {
      limit: 10,
    },
  });

  if (!fetching && !data) {
    return <div>Query failed.</div>;
  }

  return (
    <Layout>
      <Flex mr="left" p="10">
        <VStack>
          <Heading>Recipes</Heading>
        </VStack>
      </Flex>
      <SimpleGrid
        minChildWidth="1000px"
        spacing="40px"
        p="10"
        textAlign="center"
        rounded="lg"
      >
        {fetching && !data ? (
          <Spinner size="xs" />
        ) : (
          data!.products.products.map((p) => (
            <Box
              mb={4}
              p={4}
              bg="white"
              alignSelf={{ base: "center", lg: "flex-start" }}
              borderRadius={8}
              boxShadow="md"
            >
              <Center>
                <HStack
                  h="250px"
                  templateRows="repeat(4, 1fr)"
                  templateColumns="repeat(4, 1fr)"
                  gap={2}
                >
                  <GridItem colSpan={4}>
                    <Center>
                      <HStack>
                        <Text fontSize="sm">{p.name}</Text>

                        <Image
                          boxSize="150px"
                          boxShadow="xl"
                          borderRadius="20%"
                          objectFit="cover"
                          src={p.image}
                          fallbackSrc={p.image}
                          alt={p.name}
                        />
                      </HStack>
                    </Center>
                  </GridItem>

                  <GridItem colSpan={4}>
                    <Center ml="auto"></Center>
                  </GridItem>
                  <GridItem colSpan={2} mt="auto">
                    <Box
                      p={4}
                      bg="white"
                      alignSelf={{ base: "center", lg: "flex-start" }}
                      borderRadius={8}
                      boxShadow="xs"
                    >
                      1 (6 ounce) can tomato paste <br></br>2 teaspoons dried
                      oregano<br></br> 2 teaspoons dried basil<br></br> 1
                      teaspoon salt<br></br> ½ teaspoon black pepper
                    </Box>
                  </GridItem>
                  <GridItem colSpan={2}>
                    <IconButton
                      aria-label="Expand"
                      bg="grey.300"
                      color="green.300"
                      isFullWidth={true}
                      icon={<FaPlus />}
                      boxShadow="md"
                    />
                  </GridItem>
                </HStack>
              </Center>
            </Box>
          ))
        )}
      </SimpleGrid>

      {data ? (
        <Center>
          <Button
            my={8}
            isLoading={fetching}
            colorScheme={"green"}
            color="white"
            bg="linear-gradient(130deg, hsl(152, 58%, 53%), #00b698)"
            px={6}
            _hover={{
              bg: "linear-gradient(130deg, hsl(152, 58%, 53%), #00b698)",
            }}
            shadow="0 25px 25px -20px hsla(152, 58%, 53%, 0.66) !important"
            rounded="full"
            boxShadow="md"
          >
            Load More
          </Button>
        </Center>
      ) : null}
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient)(Recipes);
