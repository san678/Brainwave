import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
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
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#home",
  },
  {
    id: "1",
    title: "About Us",
    url: "#aboutus",
  },
  {
    id: "2",
    title: "Services",
    url: "#services",
  },
  {
    id: "3",
    title: "Technologies",
    url: "#technologies",
  },
  {
    id: "4",
    title: "Projects",
    url: "#projects",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Careers",
    url: "#careers",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: ".",
    text: "At Brainwave, we are passionate about transforming ideas into innovative software solutions that drive business success. As a cutting-edge technology company, we specialize in custom software development, AI-driven automation, and immersive 3D web experiences. Our mission is to empower businesses with the tools they need to thrive in today’s fast-paced digital world.",
    text2: "Founded by a team of experienced professionals, Brainwave combines deep technical expertise with creative problem-solving to craft tailored solutions for each client. Whether it’s building custom web and mobile applications, integrating advanced AI, or designing interactive 3D environments, we are dedicated to delivering high-quality, scalable solutions that meet your business needs.",
    text3: "We believe in the power of technology to shape the future, and our team is committed to helping you stay ahead of the curve. At Brainwave, your success is our priority.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  }
  // {
  //   id: "1",
  //   title: "..",
  //   date: "May 2023",
  //   status: "progress",
  //   imageUrl: roadmap2,
  // },
  // {
  //   id: "2",
  //   title: "...",
  //   date: "May 2023",
  //   status: "done",
  //   imageUrl: roadmap3,
  // }
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Custom Software Development",
    text: "Tailored software solutions designed to meet your business’s unique needs. From robust web applications to streamlined business management tools, Brainwave builds solutions that enhance productivity and deliver results.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "AI & Machine Learning Solutions",
    text: "Leverage the power of AI to make data-driven decisions, automate processes, and unlock new opportunities. Our team specializes in developing intelligent systems that adapt to and learn from your data.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "3D Web Development and Interactive Experiences",
    text: "Captivate your audience with immersive, 3D experiences. We use the latest in 3D web technology to create interactive, visually engaging websites that leave a lasting impression.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Fast responding",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Cloud Solutions and DevOps",
    text: "Optimize your infrastructure for scalability, security, and efficiency. From cloud migration to continuous deployment, our team ensures that your systems are robust and future-ready",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Augmented Reality (AR) & Virtual Reality (VR) Solutions",
    text: "Bring your digital experiences to life with cutting-edge AR and VR technologies. Whether it’s for product demonstrations, virtual tours, or immersive learning environments, Brainwave crafts tailored AR/VR solutions that create unforgettable, interactive experiences.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
