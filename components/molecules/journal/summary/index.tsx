import { Container, Flex } from "@chakra-ui/react";
import React, {createElement, Fragment, useEffect, useState} from "react";
import JournalDate from "../../../atoms/journal/date";
import JournalText from "../../../atoms/journal/text";
import {unified} from "unified";
import rehypeParse from "rehype-parse";
import rehypeReact from "rehype-react";

interface JournalSummaryProps {
  date: number;
}

const JournalSummary: React.FC<JournalSummaryProps> = ({ date, children }) => {

    function useProcessor(text) {
        // @ts-ignore
        const [Content, setContent] = useState(Fragment)

        useEffect(() => {
            unified()
                .use(rehypeParse, {fragment: true})
                .use(rehypeReact, {createElement, Fragment})
                .process(text)
                .then((file) => {
                    setContent(file.result)
                })
        }, [text])

        return Content
    }



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
