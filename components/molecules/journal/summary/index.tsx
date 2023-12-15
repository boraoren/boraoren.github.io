import {Container, Flex} from "@chakra-ui/react";
import React, {ReactNode} from "react";
import JournalBoxDate from "../../../atoms/journal/boxdate";
import JournalText from "../../../atoms/journal/text";

interface JournalSummaryProps {
    day: number;
    month: string;
    state?: "default" | "over";
    zIndex?: number;
    isSticky?: boolean;
    children: ReactNode;
}

const JournalSummary: React.FC<JournalSummaryProps> = ({
                                                           day,
                                                           month,
                                                           children,
                                                           state = "default",
                                                           zIndex,
                                                           isSticky
                                                       }) => {

    const stickyProps = {position:"sticky", top:10}

    return (
        <Container
            data-testid="molecules-journal-summary"
            position={isSticky ? "sticky" : "initial"}
            top={isSticky ? 10 : 0}
            maxWidth={"106ch"}
            p={5}
            bg={state === "over" && "primary.900"}
            color={state === "over" && "primary.50"}
            borderRadius={10}
            zIndex={zIndex}>
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
