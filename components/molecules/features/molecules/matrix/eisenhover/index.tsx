import React, {FC, useEffect, useState} from "react";
import {Box, Circle, SimpleGrid, Text} from "@chakra-ui/react";
import {FeatureNote} from "../../../atoms/stickynote";


interface FeatureMatrixEisenhowerProps {
    featureNotes: FeatureNote[];
}


const FeatureMatrixEisenhower: FC<FeatureMatrixEisenhowerProps> = (props) => {


    const [featureNotes, setFeatureNotes] = useState([]);


    let urgentImportants: Array<FeatureNote> = new Array<FeatureNote>();
    let notUrgentImportants: Array<FeatureNote> = new Array<FeatureNote>();
    let urgentNotImportants: Array<FeatureNote> = new Array<FeatureNote>();
    let notUrgentNotImportants: Array<FeatureNote> = new Array<FeatureNote>();


    const process = () => {

        const featureNotes = [];

        props.featureNotes.forEach((item) => {
            if (item.urgentValue !== 0 && item.importantValue !== 0) {

                if (item.urgentValue < 50 && item.importantValue < 50) {
                    urgentImportants.push(item);
                }

                if (item.urgentValue >= 50 && item.importantValue < 50) {
                    notUrgentImportants.push(item);
                }

                if (item.urgentValue < 50 && item.importantValue >= 50) {
                    urgentNotImportants.push(item);
                }

                if (item.urgentValue >= 50 && item.importantValue >= 50) {
                    notUrgentNotImportants.push(item);
                }
            }

        });


        featureNotes.push(urgentImportants);
        featureNotes.push(notUrgentImportants);
        featureNotes.push(urgentNotImportants);
        featureNotes.push(notUrgentNotImportants);

        return featureNotes;

    }


    useEffect(() => {
        setFeatureNotes(process())
    }, []);

    return (
        <>
            <SimpleGrid columns={[1, null, 2]} spacing={1} margin={5} mt={10}>
                <Box bg='#5DB075' height='400px' position="relative">
                    <Text color="black"
                          top={-10}
                          textAlign="center"
                          position={"relative"}>URGENT</Text>

                    <Text
                        color="black"
                        position="relative"
                        left={-50}
                        top={20}
                        style={{
                            writingMode: "vertical-lr",
                        }}
                    >
                        IMPORTANT</Text>

                    {featureNotes[0]?.map((urgentImportant) => {
                        return <Circle size='40px'
                                       bg='yellow.100'
                                       color='black'
                                       position={"absolute"}
                                       top={`${urgentImportant.importantValue * 2}%`}
                                       left={`${urgentImportant.urgentValue * 2}%`}>
                            {urgentImportant.id}
                        </Circle>
                    })}


                </Box>

                <Box bg='#5DB075' height='400px' position="relative">
                    <Text color="black"
                          top={-10}
                          textAlign="center"
                          position={"relative"}>NOT URGENT</Text>

                    {featureNotes[1]?.map((notUrgentImportant) => {
                        return <Circle size='40px'
                                       bg='yellow.100'
                                       color='black'
                                       position={"absolute"}
                                       top={`${notUrgentImportant.importantValue * 2}%`}
                                       left={`${(notUrgentImportant.urgentValue - 50) * 2}%`}>
                            {notUrgentImportant.id}
                        </Circle>
                    })}
                </Box>

                <Box bg='#5DB075' height='400px' position="relative">
                    <Text
                        color="black"
                        position="relative"
                        left={-50}
                        top={20}
                        style={{
                            writingMode: "vertical-lr",
                        }}
                    >
                        NOT IMPORTANT</Text>

                    {featureNotes[2]?.map((urgentNotImportant) => {
                        return <Circle size='40px'
                                       bg='yellow.100'
                                       color='black'
                                       position={"absolute"}
                                       top={`${(urgentNotImportant.importantValue - 50) * 2}%`}
                                       left={`${urgentNotImportant.urgentValue * 2}%`}>
                            {urgentNotImportant.id}
                        </Circle>
                    })}
                </Box>

                <Box bg='#5DB075' height='400px' position="relative">
                    {featureNotes[3]?.map((notUrgentNotImportant) => {
                        return <Circle size='40px'
                                       bg='yellow.100'
                                       color='black'
                                       position={"absolute"}
                                       top={`${(notUrgentNotImportant.importantValue - 50) * 2}%`}
                                       left={`${(notUrgentNotImportant.urgentValue - 50) * 2}%`}>
                            {notUrgentNotImportant.id}
                        </Circle>
                    })}
                </Box>

            </SimpleGrid>
        </>)
}

export default FeatureMatrixEisenhower;
