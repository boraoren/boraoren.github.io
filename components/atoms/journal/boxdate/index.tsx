import { Square } from "@chakra-ui/react";
import React from "react";

interface JournalBoxDateProps{
  value: number;
}

const JournalBoxDate : React.FC<JournalBoxDateProps> = ({value})  => {
  return (
    <Square size="60px" bg="primary.900" color="white" fontWeight={700}  rounded={"xl"}>
        {value}
    </Square>
  );
};

export default JournalBoxDate;
