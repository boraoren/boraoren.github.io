import {Flex, Square, Text} from "@chakra-ui/react";
import React from "react";

interface JournalBoxDateProps {
    value: number;
    month: string;
    state: "default" | "over";
}

const JournalBoxDate: React.FC<JournalBoxDateProps> = ({
                                                           value,
                                                           month,
                                                           state="default"
                                                       }) => {
    return (
        <Square
            size="60px"
            bg={state === "default" ? "primary.900" : "primary.50"}
            color="primary.50"
            fontWeight={700}
            rounded={"xl"}>
            <Flex
                direction="column"
                textAlign="center"
                color={state==="default" ? "primary.50" : "primary.900"}>
                <Text>
                    {value}
                </Text>
                <Text>
                    {month}
                </Text>
            </Flex>
        </Square>
    );
};

export default JournalBoxDate;
