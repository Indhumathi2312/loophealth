import { ShowcaseCategory } from "@/types";

const images = [
  "/images/public_1.png",
  "/images/public.png",
  "/images/public_2.png",
  "/images/public_3.png",
];

export const showcaseCategories: ShowcaseCategory[] = [
  {
    id: "web-design",
    name: "Web design",
    title: "Websites that look sharp and convert",
    description:
      "Layouts, type, and visual systems for brands that need a site people actually want to use.",
    imageSrc: images[0],
    mediaType: "image",
  },
  {
    id: "web-development",
    name: "Web development",
    title: "Fast, reliable sites built to last",
    description:
      "Front-end and back-end development so your site is quick, secure, and easy to update.",
    imageSrc: images[1],
    mediaType: "image",
  },
  {
    id: "wordpress-development",
    name: "WordPress development",
    title: "WordPress, without the mess",
    description:
      "Custom themes, plugins, and clean builds you can edit yourself after launch.",
    imageSrc: images[2],
    mediaType: "image",
  },
  {
    id: "mobile-app-development",
    name: "Mobile app development",
    title: "Apps for iOS and Android",
    description:
      "Native-feeling mobile products from first screen to store listing.",
    imageSrc: images[3],
    mediaType: "image",
  },
  {
    id: "custom-web-application-development",
    name: "Custom web application development",
    title: "Software shaped around your workflow",
    description:
      "Dashboards, portals, and internal tools built for how your team actually works.",
    imageSrc: images[0],
    mediaType: "image",
  },
  {
    id: "social-media-management",
    name: "Social media management",
    title: "Content and channels, handled",
    description:
      "Planning, posting, and growth across the platforms your audience already uses.",
    imageSrc: images[1],
    mediaType: "image",
  },
  {
    id: "ai-automation",
    name: "AI automation",
    title: "Automate the busy work",
    description:
      "AI workflows that take repetitive tasks off your plate and keep operations moving.",
    imageSrc: images[2],
    mediaType: "image",
  },
  {
    id: "chatbot",
    name: "Chatbot",
    title: "Chat that answers and converts",
    description:
      "On-site and WhatsApp chatbots trained on your offer, so leads get replies around the clock.",
    imageSrc: images[3],
    mediaType: "image",
  },
];
