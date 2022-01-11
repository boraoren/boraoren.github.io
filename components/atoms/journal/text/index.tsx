import React from "react";
import { Text } from "@chakra-ui/react";

const JournalText: React.FC = ({children}) => {
  return (
    <Text
      fontSize={["md", "lg", "xl", "2xl"]}
      ml={4}
      alignSelf={"center"}
      fontFamily={"journal.summary"}
      fontWeight={400}
      mt={-2}
    >
      {children}
    </Text>
  );
};

export default JournalText;
