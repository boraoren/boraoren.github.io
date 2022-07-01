import {Container, Flex} from "@chakra-ui/react";
import React from "react";
import JournalBoxDate from "../../../atoms/journal/boxdate";
import JournalText from "../../../atoms/journal/text";

interface JournalSummaryProps {
    day: number;
    month: string;
    state?: "default" | "over";
}

const JournalSummary: React.FC<JournalSummaryProps> = ({
                                                           day,
                                                           month,
                                                           children,
                                                           state = "default"
                                                       }) => {

    return (
        <Container
            maxWidth={"150ch"}
            mt={7}
            p={5}
            bg={state === "over" && "primary.900"}
            color={state === "over" && "primary.50"}
            borderRadius={10}>
            <Flex>
                <JournalBoxDate value={day}
                                month={month}
                                state={state}/>
                <JournalText>{children}</JournalText>
            </Flex>
        </Container>
    );
};

export default JournalSummary;
