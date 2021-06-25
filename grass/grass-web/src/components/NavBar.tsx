import {
  Text,
  Box,
  Flex,
  Link,
  Button,
  Icon,
  IconButton,
  Spacer,
  Center,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Avatar,
} from "@chakra-ui/react";
import * as React from "react";
import NextLink from "next/link";
import {
  useLoginMutation,
  useLogoutMutation,
  useMeQuery,
} from "../generated/graphql";
import {
  AddIcon,
  ChevronDownIcon,
  EditIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  PhoneIcon,
  RepeatIcon,
  SettingsIcon,
} from "@chakra-ui/icons";
import { RiLogoutBoxRLine } from "react-icons/ri";
import {
  BsFillHouseDoorFill,
  BsPuzzleFill,
  BsStarFill,
  BsTools,
  BsListUl,
  BsSearch,
} from "react-icons/bs";
import { isServer } from "../utils/isServer";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const [{ fetching: logoutFetching }, logout] = useLogoutMutation();
  const [{ data, fetching }] = useMeQuery({
    pause: isServer(),
  });

  let body = null;
  if (fetching) {
  } else if (!data?.me) {
    body = (
      <>
        <NextLink href="/login">
          <Link mr={2} color="white" fontSize="m">
            login
          </Link>
        </NextLink>
        <NextLink href="/register">
          <Link color="white" fontSize="m">
            register
          </Link>
        </NextLink>
      </>
    );
  } else {
    body = (
      <Center>
        <Box mr={6} color="white" fontSize="sm" fontWeight="semibold">
          <Menu>
            <MenuButton
              as={Button}
              rounded={"full"}
              variant={"link"}
              cursor={"pointer"}
            >
              <Avatar
                size={"sm"}
                name={data.me?.username}
                src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
              />
            </MenuButton>
            <MenuList bg="linear-gradient(130deg, hsl(152, 58%, 53%), #00b698)">
              <MenuItem>Link 1</MenuItem>
              <MenuItem>Link 2</MenuItem>
              <MenuDivider />
              <MenuItem>Link 3</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Spacer />
        <IconButton
          variant="outline"
          aria-label="logout"
          onClick={() => {
            logout();
          }}
          color="white"
          size="xs"
          as={RiLogoutBoxRLine}
          mt={0.5}
        />
      </Center>
    );
  }

  return (
    <>
      <Center
        zIndex={1}
        position="sticky"
        top={0}
        w="100%"
        p={4}
        ml={"auto"}
        boxShadow="0 3px 6px -6px black"
        bg="linear-gradient(130deg, hsl(152, 58%, 53%), #00b698)"
      >
        <Heading
          ml={2}
          color="white"
          as="h1"
          size="lg"
          letterSpacing={"-.1rem"}
        >
          Grass
        </Heading>
        <Text
          as="span"
          whiteSpace="nowrap"
          color="white"
          fontSize="xs"
          mt={2}
          ml={2}
        >
          The Grocery Assistant
        </Text>
        <InputGroup ml={4} mr={4}>
          <InputLeftElement
            pointerEvents="none"
            children={<BsSearch color="white" />}
          />
          <Input
            placeholder=""
            size="md"
            fontColor="white"
            boxShadow="md"
            type="unstyled"
            color="white"
          />
        </InputGroup>
        <Box ml="auto">{body}</Box>
      </Center>
      <Center
        zIndex={1}
        top={0}
        w="100%"
        p={4}
        ml={"auto"}
        mb={4}
        bg="linear-gradient(130deg, hsl(152, 58%, 44%), #00b698)"
      >
        <Flex mr="auto">
          <NextLink href="/">
            <Link mr={4} color="white" fontSize="xs">
              home
            </Link>
          </NextLink>
          <NextLink href="/store">
            <Link mr={4} color="white" fontSize="xs">
              grocery
            </Link>
          </NextLink>
          <NextLink href="/favorites">
            <Link mr={4} color="white" fontSize="xs">
              favorites
            </Link>
          </NextLink>
          <NextLink href="/pantry">
            <Link mr={4} color="white" fontSize="xs">
              pantry
            </Link>
          </NextLink>
          <NextLink href="/recipes">
            <Link mr={4} color="white" fontSize="xs">
              recipes
            </Link>
          </NextLink>
        </Flex>
      </Center>
    </>
  );
};
