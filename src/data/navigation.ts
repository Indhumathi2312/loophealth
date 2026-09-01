import { NavItem } from "@/types";

export const brand = {
  name: "Too Good",
};

export const topBannerData = {
  visible: false,
  text: "Save up to 68% on AI Web App Builder + 2 months free",
  linkText: "Claim Deal",
  linkHref: "#pricing",
};

export const mainNavItems: NavItem[] = [
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Features",
    href: "#features",
  },
  {
    label: "Pricing",
    href: "#pricing",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "FAQs",
    href: "#faqs",
  },
];

export const headerCtas = {
  whatsapp: {
    label: "WhatsApp",
    href: "https://wa.me/",
  },
  book: {
    label: "Book appointment",
    href: "/bookings/",
  },
};

export const footerSocial = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "X", href: "#" },
  { label: "YouTube", href: "#" },
];

export const footerContact = {
  email: "hello@toogood.com",
  location: "United Kingdom",
};
