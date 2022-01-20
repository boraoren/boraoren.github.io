import {Image, SimpleGrid} from "@chakra-ui/react";
import Tilt from 'react-parallax-tilt';
import {animated, useSpring} from "react-spring";
import JournalTitle from "../components/atoms/journal/title";
import LayoutJournal from "../components/LayoutJournal";

const IAmSoExited = () => {
    const [props, set] = useSpring(() => ({opacity: 0, position: "absolute", transform: "translate(50px, 0px)"}));
    const [props2, set2] = useSpring(() => ({opacity: 1, position: "absolute", transform: "translate(50px, 0px)"}));
    const imagePath = "../images/i-am-so-exited/";

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


    const onEnter2 = (eventType) => {
        set2({
            opacity: 1,
            transform: "translate(0px, 0px)",
            position: "absolute"
        })
    };

    const onLeave2 = (eventType) => {
        set2({
            opacity: 0,
            transform: "translate(50px, 0px)",
            position: "absolute"
        })
    };


    return (
        <LayoutJournal title="I'm so exited">
            <SimpleGrid color='white' direction={"column"} gap={5} mt={50}>
                <Tilt
                    tiltMaxAngleX={10}
                    tiltMaxAngleY={10}
                    perspective={800}
                    transitionSpeed={500}
                    scale={1.1}
                    gyroscope={true}
                    style={{
                        transformStyle: "preserve-3d",
                        transform: "perspective(1000px)",
                        backgroundImage: `url('${imagePath}iam-super-excited-1-1.png')`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        borderRadius: "25px"
                    }}>

                    <SimpleGrid columns={1} spacingX='1px' spacingY='20px' style={{
                        transform: "translateZ(150px) scale(0.8)",
                    }}>
                        <Image src={`${imagePath}iam-super-excited-1-2.png`} alt="pic" style={{
                            width: "100%",
                        }}>
                        </Image>

                        <Image src={`${imagePath}iam-super-excited-1-3.png`} alt="pic" style={{
                            position: "absolute"
                        }}/>
                    </SimpleGrid>
                </Tilt>

                <SimpleGrid columns={2} spacing={5}>
                    <Tilt
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
                            transform: "perspective(1000px)",
                            backgroundImage: `url('${imagePath}iam-super-excited-2-1.png')`,
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            borderRadius: "25px"
                        }}>


                        <SimpleGrid columns={1} spacingX='1px' spacingY='20px' style={{
                            transform: "translateZ(150px) scale(0.8)",
                        }}>
                            <Image src={`${imagePath}iam-super-excited-2-2.png`} alt="pic" style={{
                                width: "100%",
                            }}>
                            </Image>
                            {/*
                                //@ts-ignore */}
                            <animated.span style={props}>
                                <Image src={`${imagePath}iam-super-excited-2-3.png`} alt="pic">
                                </Image>
                            </animated.span>

                        </SimpleGrid>


                    </Tilt>
                    <Image src={`${imagePath}iam-super-excited-3.png`} boxSize='100%' objectFit='cover'
                           rounded={"xl"} ml={1}/>
                </SimpleGrid>

                <Tilt
                    tiltMaxAngleX={10}
                    tiltMaxAngleY={10}
                    perspective={800}
                    transitionSpeed={500}
                    scale={1.1}
                    gyroscope={true}
                    onEnter={onEnter2}
                    onLeave={onLeave2}
                    style={{
                        transformStyle: "preserve-3d",
                        transform: "perspective(1000px)",
                        backgroundImage: `url('${imagePath}iam-super-excited-4-1.png')`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        borderRadius: "25px"
                    }}>


                    <SimpleGrid columns={1} spacingX='1px' spacingY='20px' style={{
                        transform: "translateZ(150px) scale(0.8)",
                    }}>
                        <Image src={`${imagePath}iam-super-excited-4-2.png`} alt="pic" style={{
                            width: "100%",
                        }}>
                        </Image>

                        <Image src={`${imagePath}iam-super-excited-4-3.png`} alt="pic" style={{
                            position: "absolute"
                        }}>
                        </Image>

                        {/*
                                //@ts-ignore */}
                        <animated.span style={props2}>
                            <Image src={`${imagePath}iam-super-excited-4-4.png`} alt="pic">
                            </Image>
                        </animated.span>

                    </SimpleGrid>
                </Tilt>
            </SimpleGrid>
        </LayoutJournal>
    )
};

export default IAmSoExited;
