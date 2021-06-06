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
} from "@chakra-ui/react";
import React from "react";
import { NavBar } from "../components/NavBar";
import { createUrqlClient } from "../utils/createUrqlClient";
import { withUrqlClient } from "next-urql";
import { useProductsQuery } from "../generated/graphql";
import { BsStar } from "react-icons/bs";
import { RiMoneyDollarBoxFill } from "react-icons/ri";

const Index = () => {
  const [{ data }] = useProductsQuery();
  return (
    <>
      <NavBar />
      <Center>
        <Image
          boxSize="100px"
          objectFit="scale-down"
          src="https://i.imgur.com/kUq0bZ8.png"
        />
      </Center>
      <SimpleGrid
        bg="gray.50"
        minChildWidth="120px"
        spacing="40px"
        p="10"
        textAlign="center"
        rounded="lg"
        color="gray.400"
      >
        {!data ? (
          <Spinner size="xs" />
        ) : (
          data.products.map((p) => (
            <Box
              mb={4}
              p={4}
              bg="white"
              shadow="base"
              borderWidth="1px"
              alignSelf={{ base: "center", lg: "flex-start" }}
              borderColor="#97CF6E"
              borderRadius={"xl"}
            >
              <Center>
                <Grid
                  h="250px"
                  templateRows="repeat(3, 1fr)"
                  templateColumns="repeat(4, 1fr)"
                  gap={2}
                >
                  <GridItem colSpan={4}>
                    <Text fontWeight="semibold">{p.name}</Text>${p.price}
                  </GridItem>
                  <GridItem colSpan={4}>
                    <Center>
                      <Image
                        fill="green"
                        boxSize="150px"
                        objectFit="scale-down"
                        src={p.image}
                        fallbackSrc={p.image}
                        alt={p.name}
                      />
                    </Center>
                  </GridItem>
                  <GridItem colSpan={3}>
                    <Button colorScheme="green" isFullWidth={true}>
                      +
                    </Button>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <IconButton colorScheme="yellow" icon={<BsStar />}>
                      Favorite
                    </IconButton>
                  </GridItem>
                </Grid>
              </Center>
            </Box>
          ))
        )}
      </SimpleGrid>
    </>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
