import React, {FC} from "react";
import {Flex, Image, Text} from "@chakra-ui/react";

interface BImageProps {
    src: string;
    title: string;
    rotate?: number;
}

const BImage: FC<BImageProps> = ({
                                     src,
                                     title,
                                     rotate = 0
                                 }) => {
    return (
        <Flex direction="column" boxShadow="lg" style={{transform: `rotate(${rotate}deg)`}} m={3} backgroundColor="primary.50" maxWidth="md">
            <Image src={src}  rounded={10} />
            {title &&
            <Text m={1} backgroundColor="primary.50">{title}</Text>
            }
        </Flex>
    )
}

export default BImage;
