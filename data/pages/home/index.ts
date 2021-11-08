export type HomePageData = {
    hi: object;
    Im: object;
    name: object;
    title: object;
    image: string;
  }

export const homePageData: HomePageData =  {
    hi: {
        "en-US": "Hi,",
        "tr-TR": "Merhaba,",
    },
    Im: {
        "en-US": "I'm",
        "tr-TR": "Ben"
    },
    name: {
        "en-US": "Bora",
    },
    title: {
        "en-US": "Software Developer",
        "tr-TR": "Yazılım Geliştirici",
    },
    image: "bora.png", //should put image file in public folder
}
