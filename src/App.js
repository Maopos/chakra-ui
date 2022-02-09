import { Box, Heading, Button, Flex, Stack } from "@chakra-ui/react";
import largeImage from "./img/wepik-202218-171717.png";

function App() {
  return (
    <Box
      h="40vh"
      bg="gray"
      bgImage={`url(${largeImage})`}
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        direction="column"
        alignItems="center"
        justify="center"
        h="full"
        bg="rgb(0 0 0 / 40%)"
      >
        <Heading
          color="white"
          textTransform="uppercase"
          fontWeight="thin"
          textAlign="center"
          letterSpacing={"5px"}
        >
          Domina el terreno
        </Heading>
        <Stack direction="row" spacing={4}>
          <Button
            variant="outline"
            size={"lg"}
            textTransform={"uppercase"}
            fontWeight={"light"}
            color="white"
            borderRadius={0}
            letterSpacing={'1px'}
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
            letterSpacing={'1px'}
          >
            Ver video
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
}

export default App;
