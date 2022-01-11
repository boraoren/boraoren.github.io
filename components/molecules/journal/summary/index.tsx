import { Container, Flex } from "@chakra-ui/react";
import React from "react";
import JournalDate from "../../../atoms/journal/date";
import JournalText from "../../../atoms/journal/text";

interface JournalSummaryProps {
  date: number;
}

const JournalSummary: React.FC<JournalSummaryProps> = ({ date, children }) => {
  return (
    <Container maxWidth={"150ch"} mt={7} ml={-3}>
      <Flex>
        <JournalDate value={date} />
        <JournalText>{children}</JournalText>
      </Flex>
    </Container>
  );
};

export default JournalSummary;
