import React from "react";
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  Badge,
  List,
  ListItem,
} from "@chakra-ui/react";
import { MdLocalShipping } from "react-icons/md";

export const ItemDetailContainer = ({item}) => {
  return (
    <Container maxW={"7xl"} py={{ base: 12, md: 16 }}>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, md: 10 }}>
        <Flex>
          <Image
            rounded={"md"}
            alt={"Botines de fútbol"}
            src={item.thumbnail} // Cambia esta URL a la imagen de tu producto
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={700}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {item.title}
            </Heading>
            <Text color={useColorModeValue("gray.900", "gray.400")} fontWeight={500} fontSize={"2xl"}>
              {item.price}
            </Text>
            <Badge colorScheme="green" mt={2} fontSize={"lg"}>
              Envío Gratis
            </Badge>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={<StackDivider borderColor={useColorModeValue("gray.200", "gray.600")} />}
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text color={useColorModeValue("gray.600", "gray.400")} fontSize={"lg"} fontWeight={"400"}>
                {item.description}
              </Text>
              {/* <Text fontSize={"md"}>
                Con una suela ergonómica y materiales ligeros, los Botines Pro-X 500 son
                ideales para quienes buscan precisión y agilidad en el juego.
              </Text> */}
            </VStack>

{/*             <Box>
              <Text fontSize={{ base: "16px", lg: "18px" }} color={useColorModeValue("teal.600", "teal.300")} fontWeight={"600"} textTransform={"uppercase"} mb={"4"}>
                Características
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                <List spacing={2}>
                  <ListItem>Tecnología GripControl</ListItem>
                  <ListItem>Material anti-deslizante</ListItem>
                  <ListItem>Soporte de tobillo</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>Plantilla acolchada</ListItem>
                  <ListItem>Compatible con césped artificial</ListItem>
                  <ListItem>Diseño ultraligero</ListItem>
                </List>
              </SimpleGrid>
            </Box>

            <Box>
              <Text fontSize={{ base: "16px", lg: "18px" }} color={useColorModeValue("teal.600", "teal.300")} fontWeight={"600"} textTransform={"uppercase"} mb={"4"}>
                Detalles del Producto
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Peso:
                  </Text>{" "}
                  250 gramos
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Material:
                  </Text>{" "}
                  Microfibra de alto rendimiento
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Colores disponibles:
                  </Text>{" "}
                  Negro, Blanco, Azul
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Suela:
                  </Text>{" "}
                  Multi-Terrain para césped sintético y natural
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Resistencia al agua:
                  </Text>{" "}
                  Tratamiento repelente de agua
                </ListItem>
              </List>
            </Box> */}
          </Stack>

          <Button
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg={useColorModeValue("teal.700", "teal.300")}
            color={useColorModeValue("white", "teal.800")}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
          >
            Añadir al carrito
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text fontSize={"md"}>Entrega en 2-3 días hábiles</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};
