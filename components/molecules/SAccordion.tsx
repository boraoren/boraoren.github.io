import React from "react";
import {Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Image} from "@chakra-ui/react";

interface SAccordionProps{
    sections: string[];
    texts: string[];
}

const SAccordion: React.FC<SAccordionProps> = ({sections, texts}) => {
    return(
        <Accordion>
            {sections.map((section, index) => {
                return <AccordionItem key={index}>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                                {section}
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        {texts[index]}
                    </AccordionPanel>
                </AccordionItem>
            })}
        </Accordion>
    )
}

export default SAccordion;
