import {SimpleGrid} from "@chakra-ui/react";
import CartoonBox, {CartoonBoxProps} from "../../molecules/cartoon/box";
import {FC} from "react";

interface CartoonTemplateProps {
    imagePath: string;
    cartoonBoxes?: CartoonBoxProps[];
}

const CartoonTemplate: FC<CartoonTemplateProps> = ({cartoonBoxes, imagePath}) => {

    cartoonBoxes = [{images: ["iam-super-excited-1-1.png","iam-super-excited-1-2.png","iam-super-excited-1-3.png"]}, {images: ["iam-super-excited-2-1.png","iam-super-excited-2-2.png"], speechBalloonImage: "iam-super-excited-2-3.png"}, {images: ["iam-super-excited-3-1.png"],speechBalloonImage: "iam-super-excited-3-2.png"}, {images: ["iam-super-excited-4-1.png","iam-super-excited-4-2.png","iam-super-excited-4-3.png"],speechBalloonImage: "iam-super-excited-4-4.png"}]

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
