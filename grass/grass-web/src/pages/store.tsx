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
} from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { withUrqlClient } from "next-urql";
import * as React from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import { Layout } from "../components/Layout";
import { useProductsQuery } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";

export const Store = () => {
  const [{ data }] = useProductsQuery({
    variables: {
      limit: 10,
    },
  });
  return (
    <Layout>
      <Flex align="center">
        <Image
          boxSize="100px"
          objectFit="scale-down"
          src="https://i.imgur.com/WTQtGKL.png"
          width="200px"
          align="left"
        />
        <Text ml="auto">3705 El Camino Real</Text>
      </Flex>
      <SimpleGrid
        minChildWidth="240px"
        spacing="40px"
        p="10"
        textAlign="center"
        rounded="lg"
      >
        {!data ? (
          <Spinner size="xs" />
        ) : (
          data.products.map((p) => (
            <Box
              mb={4}
              p={4}
              bg="white"
              alignSelf={{ base: "center", lg: "flex-start" }}
              borderRadius={8}
              boxShadow="md"
            >
              <Center>
                <Grid
                  h="250px"
                  templateRows="repeat(4, 1fr)"
                  templateColumns="repeat(4, 1fr)"
                  gap={2}
                >
                  <GridItem colSpan={4}>
                    <Center>
                      <Image
                        boxSize="150px"
                        borderRadius="20%"
                        objectFit="cover"
                        src={p.image}
                        fallbackSrc={p.image}
                        alt={p.name}
                      />
                    </Center>
                  </GridItem>

                  <GridItem colSpan={4} ml="auto">
                    <Center>
                      <HStack>
                        <Text
                          as={"span"}
                          color="green.400"
                          fontSize="xs"
                          fontWeight="semibold"
                        >
                          ${""}
                          <Text
                            ml={0.5}
                            as={"span"}
                            color="black"
                            fontSize="lg"
                            fontWeight="bold"
                          >
                            {p.priceFormat}
                          </Text>
                        </Text>
                      </HStack>
                    </Center>
                  </GridItem>

                  <GridItem colSpan={3}>
                    <IconButton
                      aria-label="Add to cart"
                      colorScheme="green"
                      bg="green.300"
                      color="white"
                      isFullWidth={true}
                      rounded="full"
                      icon={<FaShoppingCart />}
                      boxShadow="md"
                    />
                  </GridItem>
                  <GridItem colSpan={1}>
                    <IconButton
                      aria-label="Add to cart"
                      colorScheme="yellow"
                      bg="yellow.300"
                      color="white"
                      isFullWidth={true}
                      rounded="full"
                      icon={<BsStarFill />}
                      boxShadow="md"
                    />
                  </GridItem>
                </Grid>
              </Center>
            </Box>
          ))
        )}
      </SimpleGrid>
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient)(Store);
