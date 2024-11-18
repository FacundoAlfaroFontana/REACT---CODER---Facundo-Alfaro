import { Box } from "@chakra-ui/react";
import {NavBar} from "../components/NavBar";

export const MainLayout = ({children}) => {
    return (
    <Box>
        {children}
    </Box>
    );
};


