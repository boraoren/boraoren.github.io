import {SimpleGrid} from "@chakra-ui/react";
import CartoonBox, {CartoonBoxProps} from "../../molecules/cartoon/box";
import {FC} from "react";

interface CartoonTemplateProps {
    imagePath: string;
    cartoonBoxes?: CartoonBoxProps[];
}

const CartoonTemplate: FC<CartoonTemplateProps> = ({cartoonBoxes, imagePath}) => {


    return (
            <SimpleGrid color='white' direction={"column"} gap={5} >
                <CartoonBox imagePath={imagePath}
                            images={cartoonBoxes[0].images}/>

                <SimpleGrid columns={2} spacing={5}>
                    <CartoonBox imagePath={imagePath}
                                images={cartoonBoxes[1].images}
                                speechBalloonImage={cartoonBoxes[1].speechBalloonImage}
                                tiltEnable={cartoonBoxes[1].tiltEnable}/>

                    <CartoonBox imagePath={imagePath}
                                images={cartoonBoxes[2].images}
                                speechBalloonImage={cartoonBoxes[2].speechBalloonImage}
                                tiltEnable={cartoonBoxes[2].tiltEnable}/>


                </SimpleGrid>

                <CartoonBox imagePath={imagePath}
                            images={cartoonBoxes[3].images}
                            speechBalloonImage={cartoonBoxes[3].speechBalloonImage}
                            tiltEnable={cartoonBoxes[3].tiltEnable}/>
            </SimpleGrid>
    )
};

export default CartoonTemplate;
