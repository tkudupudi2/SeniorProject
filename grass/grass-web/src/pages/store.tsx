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
import { FaShoppingCart } from "react-icons/fa";
import { withUrqlClient } from "next-urql";
import * as React from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import { Layout } from "../components/Layout";
import { useProductsQuery } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";

export const Store = () => {
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
      <Flex align="center" p="10">
        <Image
          boxSize="100px"
          objectFit="scale-down"
          src="https://i.imgur.com/WTQtGKL.png"
          width="200px"
          align="left"
        />
        <Text ml="auto" color="grey">
          3705 el camino real
        </Text>
      </Flex>
      <SimpleGrid
        minChildWidth="240px"
        spacing="40px"
        p="10"
        textAlign="center"
        rounded="lg"
      >
        {fetching && !data ? (
          <Spinner size="xs" />
        ) : (
          data!.products.map((p) => (
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
                      <VStack>
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
                      </VStack>
                    </Center>
                  </GridItem>

                  <GridItem colSpan={4}>
                    <Center ml="auto"></Center>
                  </GridItem>
                  <GridItem colSpan={2} mt="auto">
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
                  </GridItem>
                  <GridItem colSpan={2}>
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
                </Grid>
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

export default withUrqlClient(createUrqlClient)(Store);
