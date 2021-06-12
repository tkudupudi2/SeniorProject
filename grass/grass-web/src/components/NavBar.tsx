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
          Welcome, {data.me.username}
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
    <Center
      zIndex={1}
      position="sticky"
      top={0}
      w="100%"
      p={4}
      ml={"auto"}
      mb={4}
      boxShadow="base"
      bg="green.400"
    >
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
        />
        <MenuList bg="white">
          <MenuItem icon={<BsFillHouseDoorFill />}>Home</MenuItem>
          <MenuItem icon={<BsPuzzleFill />}>Explore</MenuItem>
          <MenuItem icon={<BsStarFill />}>Favorites</MenuItem>
          <MenuItem icon={<EditIcon />}>Orders</MenuItem>
          <MenuItem icon={<BsTools />}>Settings</MenuItem>
        </MenuList>
      </Menu>
      <Heading ml={2} color="white" as="h1" size="lg" letterSpacing={"-.1rem"}>
        Grass
      </Heading>
      <Text color="white" fontSize="xs" mt={2} ml={2}>
        The Grocery Assistant
      </Text>
      <Box ml="auto">{body}</Box>
    </Center>
  );
};
