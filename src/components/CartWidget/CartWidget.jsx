import { Flex } from "@chakra-ui/react";
import { BsBackpack3 } from "react-icons/bs";

export const CartWidget = () => {

    return(
        <div style={{display: `Flex`, marginRight: "20px", alignItems: `center`, width: `40px`, justifyContent: `space-between`}}>
            <BsBackpack3 size={30}/>
            1
        </div>
    )
}


