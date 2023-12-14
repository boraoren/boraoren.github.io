import React from "react";
import {Text} from "@chakra-ui/react";

const JournalTitle = ({children}) => {

    return (
        <Text textStyle='h1'
              lineHeight={1}
              date-testid="atoms-journal-title">
            {children}
        </Text>
    );
};

export default JournalTitle;
