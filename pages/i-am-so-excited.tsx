import CartoonTemplate from "../components/templates/cartoon";
import {CartoonBoxProps} from "../components/molecules/cartoon/box";

const IAmSoExcited = () => {

    const cartoonBoxes: CartoonBoxProps[] = [
        {
            images: ["iam-super-excited-1-1.png",
                "iam-super-excited-1-2.png",
                "iam-super-excited-1-3.png"]
        },
        {
            images: ["iam-super-excited-2-1.png",
                "iam-super-excited-2-2.png"],
            speechBalloonImage: "iam-super-excited-2-3.png"
        },
        {
            images: ["iam-super-excited-3-1.png"],
            speechBalloonImage: "iam-super-excited-3-2.png",
        },
        {
            images: ["iam-super-excited-4-1.png",
                "iam-super-excited-4-2.png",
                "iam-super-excited-4-3.png"],
            speechBalloonImage: "iam-super-excited-4-4.png"
        }
    ]

    return (
        <CartoonTemplate imagePath="i-am-super-excited"
                         cartoonBoxes={cartoonBoxes}/>
    )
};

export default IAmSoExcited;
