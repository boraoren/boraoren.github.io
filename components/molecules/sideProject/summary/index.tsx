import {Container, Flex} from "@chakra-ui/react";
import React, {ReactNode} from "react";
import JournalBoxDate from "../../../atoms/journal/boxdate";
import JournalText from "../../../atoms/journal/text";

interface SideProjectSummaryProps {
    day: number;
    month: string;
    state?: "default" | "over";
    children: ReactNode;
}

const SideProjectSummary: React.FC<SideProjectSummaryProps> = ({
                                                           day,
                                                           month,
                                                           children,
                                                           state = "default",
                                                       }) => {

    const stickyProps = {position:"sticky", top:10}

    return (
        <Container
            position="sticky"
            top={10}
            maxWidth={"106ch"}
            p={5}
            bg="white"
            zIndex={999}>
            <Flex>
                <JournalBoxDate value={day}
                                month={month}
                                state={state}/>
                <JournalText>{children}</JournalText>
            </Flex>
        </Container>
    );
};

export default SideProjectSummary;
