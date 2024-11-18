import { Flex, Icon, Spinner, Text } from "@chakra-ui/react";
import { FaFutbol } from "react-icons/fa";

export const Loader = () => {
    return (
        <Flex
            height="100vh"
            width="100vw"
            direction="column"
            alignItems="center"
            justifyContent="center"
            bgGradient="linear(to-b, green.400, green.700)"
        >
            <Icon
                as={FaFutbol}
                color="white"
                boxSize="60px"
                className="soccer-ball-icon"
                mb={4}
            />
            <Spinner
                thickness="6px"
                speed="0.8s"
                emptyColor="gray.200"
                color="white"
                size="xl"
            />
            <Text
                fontSize="lg"
                fontWeight="bold"
                color="white"
                mt={4}
                textAlign="center"
            >
                Preparando la cancha...
            </Text>
            <style jsx="true">{`
                .soccer-ball-icon {
                    animation: spin 1s linear infinite;
                }
                @keyframes spin {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }
            `}</style>
        </Flex>
    );
};


