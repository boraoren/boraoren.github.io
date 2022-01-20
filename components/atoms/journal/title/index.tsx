import React from "react";
import {Text} from "@chakra-ui/react";

const JournalTitle: React.FC = ({children}) => {

    return (
        <Text textStyle='h1' color="primary.900">
            {children}
        </Text>
    );
};

export default JournalTitle;
