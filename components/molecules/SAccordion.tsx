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
                        Given the user signs in PlayTime App
                        and is on “Calendar” screen
                        When the user clicks on “Create” button
                        Then the user is redirected to the “Create Playgroup” screen to fill the details
                        and current day is selected
                        and organiser is set as “me” and shows user’s profile picture
                        and location is pre-populated with the home address of current user by default and
                        it is enabled
                        and the telephone number field is pre-populated with user’s mobile number and it is disabled
                        and the number of children is set to 1 and enabled

                    </AccordionPanel>
                </AccordionItem>
            })}
        </Accordion>
    )
}

export default SAccordion;
