import React from "react";
import {Text} from "@chakra-ui/react";

const JournalTitle= ({children}) => {

    return (
        <Text textStyle='h1' >
            {children}
        </Text>
    );
};

export default JournalTitle;
