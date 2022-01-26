import React, {FC} from "react";
import {Box, Center} from "@chakra-ui/react";

export interface FeatureNote {
    id: number;
    note: string;
    urgentValue: number;
    importantValue: number;
}

const min = 0;
const max = 10;

const getDegree = () => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const FeatureStickyNote: FC<FeatureNote> = (featureNote) => {
    return <Box bg='yellow.100'
                transform={`rotate(${getDegree()}deg)`}
                boxShadow={"lg"}
                height="150px"
                fontSize={["md", null, "lg"]}
                _hover={{
                    transform: "scale(1.2)",
                    transition: "transform .2s",
                }}
                textAlign={"center"}>
        <Center ml={5} mr={5} mt={5} fontStyle={"italic"}>
            {featureNote.id}<br/>
            {featureNote.note}
        </Center>
    </Box>
}

export default FeatureStickyNote;
