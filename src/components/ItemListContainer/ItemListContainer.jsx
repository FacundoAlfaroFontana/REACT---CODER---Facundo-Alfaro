import { Card, CardBody, Image, Heading, Text, Badge, Button, Grid } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const ItemListContainer = ({ products }) => {
    console.log(products);

    return (
        <Grid 
            templateColumns="repeat(4, 1fr)" 
            gap={8}
            p={4}
            justifyItems="center"
        >
            {products.map((product) => (
                <Card key={product.id} maxW="xs" borderRadius="lg" overflow="hidden" boxShadow="md" p={4}>
                    <Image
                        src={product.thumbnail}
                        alt={product.title}
                        objectFit="cover"
                        borderRadius="md"
                        height="200px"
                        transition="transform 0.2s"
                        _hover={{ transform: "scale(1.05)" }}
                    />
                    
                    <CardBody>
                        <Heading size="md" color="blue.600" mb={2}>
                            {product.title}
                        </Heading>
                        
                        <Text fontSize="sm" color="gray.600" mb={3} noOfLines={2}>
                            {product.description}
                        </Text>

                        <Text fontSize="lg" fontWeight="bold" color="purple.500">
                            ${product.price}
                        </Text>
                        
                        <Badge colorScheme={product.stock > 0 ? "green" : "red"} mb={3}>
                            {product.stock > 0 ? `En Stock: ${product.stock}` : "Agotado"}
                        </Badge>
                        
                        <Button
                            as={Link}
                            to={`/item/${product.id}`}  // Nueva ruta
                            size="sm"
                            colorScheme="blue"
                            mt={6}
                            isDisabled={product.stock === 0}
                        >
                            Ver Producto
                        </Button>
                    </CardBody>
                </Card>
            ))}
        </Grid>
    );
};
