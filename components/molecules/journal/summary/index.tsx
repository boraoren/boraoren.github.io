import { Container, Flex } from "@chakra-ui/react";
import React, {createElement, Fragment, useEffect, useState} from "react";
import JournalBoxDate from "../../../atoms/journal/boxdate";
import JournalText from "../../../atoms/journal/text";
import {unified} from "unified";
import rehypeParse from "rehype-parse";
import rehypeReact from "rehype-react";

interface JournalSummaryProps {
  day: number;
}

const JournalSummary: React.FC<JournalSummaryProps> = ({ day, children }) => {

    return (
    <Container maxWidth={"150ch"} mt={7} ml={-3}>
      <Flex>
        <JournalBoxDate value={day} />
        <JournalText>{children}</JournalText>
      </Flex>
    </Container>
  );
};

export default JournalSummary;
