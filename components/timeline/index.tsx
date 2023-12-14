'use client'
import {Chrono} from "react-chrono";

const TimeLine = () => {
    const items = [
        {
            title: '23 May 2023',
            cardTitle: 'I need simple project management tool',
            media: {
                name: 'project management',
                source: {
                    url: '/images/side-projects/product-management.jpeg',
                    // url: "/dunkirk.mp4"
                },
                type: 'IMAGE',
            },
            cardDetailedText: `While there are numerous project and task management tools available, 
            many of them lack one crucial element: simplicity. 
            This led me to embark on the journey of developing my own project and task management application.`
        }
    ]

    return (
            <div style={{width: "100", height: "100%",
                marginBottom: 100,
                paddingBottom: 50,
            paddingLeft: 90,}}>
                <Chrono
                    items={items}
                    mode="HORIZONTAL"
                    showAllCardsHorizontal
                    cardPositionHorizontal="BOTTOM"
                    cardHeight={300}
                    lineWidth={5}
                    cardWidth={500}
                    mediaHeight={200}

                    slideShow
                    theme={{
                        primary: 'black',
                        secondary: 'black',
                        cardBgColor: 'white',
                        titleColor: 'black',
                        titleColorActive: 'white',
                    }}
                    useReadMore
                    focusActiveItemOnLoad
                    slideItemDuration={2550}
                    itemWidth={300}
                    onItemSelected={(selected) => console.log(selected)}
                    timelinePointDimension={20}
                    timelinePointShape="circle"
                    // cardPositionHorizontal="TOP"
                    buttonTexts={{
                        first: 'Jump to First',
                        last: 'Jump to Last',
                        next: 'Next',
                        previous: 'Previous',
                    }}
                    enableDarkToggle
                    onScrollEnd={() => console.log('end reached')}
                    verticalBreakPoint={1920}
                    enableBreakPoint
                    mediaSettings={{
                        imageFit: 'cover',
                    }}
                />
            </div>
    )
}

export default TimeLine;