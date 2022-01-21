import {Text} from "@chakra-ui/react";
import React from "react";

interface JournalDateProps {
    value: string;
}

const JournalDate: React.FC<JournalDateProps> = ({value}) => {
    return (
        <Text
              fontSize={["sm","lg","2xl"]}
              fontFamily="primary"
              color="primary.600"
              mt={-5}
        >
            {value}
        </Text>
    );
};

export default JournalDate;
