import { Box, Heading, Button, Flex, Stack } from "@chakra-ui/react";
import largeImage from "../img/wepik-202218-171717.png";
import shortImage from "../img/wepik-202218-17188.png";

const Header = () => {
    console.log(window.screen);
    
  return (
    <Box
      h="40vh"
      bg="gray"
      bgImage={{ base: `url(${shortImage})`, md: `url(${largeImage})` }}
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        direction="column"
        alignItems="center"
        justify="center"
        h="full"
        bg="rgb(0 0 0 / 40%)"
        p={['0 4%', null, '0 20%']}
      >
        <Heading
          color="white"
          textTransform="uppercase"
          fontWeight="thin"
          textAlign="center"
          letterSpacing={"4px"}
        >
          Domina el terreno
        </Heading>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={4}
          mt="20px"
          w={["100%", null, "auto"]}
        >
          <Button
            variant="outline"
            size={"lg"}
            textTransform={"uppercase"}
            fontWeight={"light"}
            color="white"
            borderRadius={0}
            letterSpacing={"1px"}
            _hover={{
              color: "black",
              bg: "white",
            }}
          >
            Ver detalles
          </Button>
          <Button
            variant="outline"
            size={"lg"}
            textTransform={"uppercase"}
            fontWeight={"light"}
            color="white"
            borderRadius={0}
            letterSpacing={"1px"}
            _hover={{
              color: "black",
              bg: "white",
            }}
          >
            Ver video
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Header;
