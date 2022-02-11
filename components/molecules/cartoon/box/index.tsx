import React, {FC} from "react";
import Tilt from "react-parallax-tilt";
import {Box, Image, SimpleGrid} from "@chakra-ui/react";
import {animated, useSpring} from "react-spring";

export interface CartoonBoxProps {
    imagePath?: string;
    images: string[];
    speechBalloonImage?: string;
    tiltEnable?: boolean;
    size?: number;
}

const CartoonBox: FC<CartoonBoxProps> = ({
                                             size,
                                             imagePath,
                                             images,
                                             speechBalloonImage,
                                             tiltEnable = true
                                         }) => {

    const [props, set] = useSpring(() => ({opacity: 0, position: "absolute", transform: "translate(50px, 0px)"}));

    const onEnter = (eventType) => {
        set({
            opacity: 1,
            transform: "translate(0px, 0px)",
            position: "absolute"
        })
    };

    const onLeave = (eventType) => {
        set({
            opacity: 0,
            transform: "translate(50px, 0px)",
            position: "absolute"
        })
    };


    return (
        <Tilt
            tiltEnable={tiltEnable}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={800}
            transitionSpeed={500}
            scale={1.1}
            gyroscope={true}
            onEnter={onEnter}
            onLeave={onLeave}
            style={{
                transformStyle: "preserve-3d",
                backgroundImage: `url('${imagePath}${images[0]}')`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                borderRadius: "25px",
            }}>

            <SimpleGrid columns={1} spacingX='1px' spacingY='20px' style={{
                transform: "translateZ(150px) scale(0.8)",
            }}>

                {images[1] &&
                <Image src={`${imagePath}${images[1]}`} alt="pic" style={{
                    width: "100%",
                }}>
                </Image>
                }

                {images[2] &&
                <Image src={`${imagePath}${images[2]}`} alt="pic" style={{
                    position: "absolute"
                }}>
                </Image>
                }

                {speechBalloonImage &&
                //@ts-ignore
                <animated.span style={props}>
                    <Image src={`${imagePath}${speechBalloonImage}`} alt="pic">
                    </Image>
                </animated.span>
                }

            </SimpleGrid>
        </Tilt>
    )

}

export default CartoonBox;
