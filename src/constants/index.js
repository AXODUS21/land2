import {
  benefitIcon1,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  scalesetBanner,
  fiveStar,
  fourStar,
  threeStar,
  twoStar,
} from "../assets";

export const navigation = [
  {
    id: "1",
    title: "Our Strategy",
    url: "#hero",
    offset: -100,
  },
  {
    id: "2",
    title: "Services",
    url: "#pricing",
    offset: -100,
  },
  {
    id: "3",
    title: "Testimonials",
    url: "#features",
    offset: -50,
  },
  {
    id: "4",
    title: "Case Study",
    url: "#roadmap",
    offset: -50,
  },
  {
    id: "5",
    title: "Book A Call",
    url: "#how-to-use",
    offset: -100,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [scalesetBanner, scalesetBanner, "" , scalesetBanner, scalesetBanner];

export const caseStudies = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
    colorful: true,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
    colorful: true,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
    colorful: true,
  },
];

export const services = [
  {
    id: "0",
    title: "Done-For-You",
    description:
      "We manage your client acquisition - from custom campaigns to booking appointments - so you can focus on your business. Tailored for maximum results with minimal effort.",
    price: "0",
    features: [
      "Custom campaigns designed to acquire high-quality clients effortlessly",
      "Automated appointment booking system for streamlined client interactions",
      "Tailored strategies that maximize results with minimal time investment",
    ],
  },
  {
    id: "1",
    title: "Done-With-You",
    description:
      "Learn to master appointment setting with our training and guidance. Gain the skills to run effective campaigns independently - ideal for businesses on a budget or seeking in-house control.",
    price: "9.99",
    features: [
      "Comprehensive training on mastering appointment setting for long-term success",
      "Step-by-step guidance to run cost-effective campaigns without external help",
      "Tools and resources designed for businesses seeking in-house control and autonomy",
    ],
  },
];

export const Testimonials = [
  {
    id: "0",
    title: "Company 1",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    stars: fiveStar,
    clientName: "Client 1",
    ClientPfp: benefitIcon1,
    clientPosition: "CEO @ google",
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Company 2",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    stars: threeStar,
    clientName: "Client 1",
    ClientPfp: benefitIcon1,
    clientPosition: "CEO @ facebook",
    imageUrl: benefitImage2,
  },
  {
    id: "2",
    title: "Company 3",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    stars: fourStar,
    clientName: "Client 1",
    ClientPfp: benefitIcon1,
    clientPosition: "CEO @ scaleset",
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Company 4",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    stars: fiveStar,
    clientName: "Client 1",
    ClientPfp: benefitIcon1,
    clientPosition: "CEO @ bottleo",
    imageUrl: benefitImage2,
  },
  {
    id: "4",
    title: "Company 5",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    stars: fiveStar,
    clientName: "Client 1",
    ClientPfp: benefitIcon1,
    clientPosition: "CEO @ mcdonalds",
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "https://discord.gg/qrVHHf6hs2",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: " https://x.com/oscar_hansen1 ",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "https://www.linkedin.com/in/oscar-hansen1/",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "mailto:contact@scaleset.net",
  },
];
