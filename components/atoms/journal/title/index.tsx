import React from "react";
import {Badge, Text} from "@chakra-ui/react";

const JournalTitle = (props) => {

    return (
        <Text textStyle='h1'>
            {props.children}

        </Text>
    );
};

export default JournalTitle;
