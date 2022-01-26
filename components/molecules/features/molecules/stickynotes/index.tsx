import React, {FC} from "react";
import {SimpleGrid} from "@chakra-ui/react";
import FeatureStickyNote, {FeatureNote} from "../../atoms/stickynote";

export interface FeatureStickyNotesProps {
    featureNotes: FeatureNote[];
}

const FeatureStickyNotes: FC<FeatureStickyNotesProps> = ({featureNotes}) => {
    return (
        <SimpleGrid columns={[2, null, 3, 4]} spacing={10} mb={10} mt={10}>
            {featureNotes.map((featureNote) => {
                return <FeatureStickyNote {...featureNote}/>
            })}
        </SimpleGrid>
    )
}

export default FeatureStickyNotes;
