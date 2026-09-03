export interface AppTab {
  id: string;
  title: string;
  image: string;
  bgColor: string;
  iconBgColor: string;
  iconColor: string;
  icon: string;
}

export const appTabs: AppTab[] = [
  {
    id: "policy-details",
    title: "Policy Details",
    image: "/images/661624e32b3463b9c5e6ca40_Policy Details.webp",
    bgColor: "bg-[#BCDD33]",
    iconBgColor: "bg-[#BCDD33]",
    iconColor: "text-white",
    icon: "/images/policy-details.svg",
  },
  {
    id: "monthly-reporting",
    title: "Monthly Reporting",
    image: "/images/661624e3fdfd314129afe55c_Monthly Reporting.webp",
    bgColor: "bg-[#FDD506]",
    iconBgColor: "bg-[#FDD506]",
    iconColor: "text-white",
    icon: "/images/monthly-reporting.svg",
  },
  {
    id: "claims-details",
    title: "Claims Details",
    image: "/images/661624e32b3463b9c5e6ca6c_Claim Details.webp",
    bgColor: "bg-[#A586EF]",
    iconBgColor: "bg-[#A586EF]",
    iconColor: "text-white",
    icon: "/images/claims-details.svg",
  },
  {
    id: "claim-tracking",
    title: "Claim Tracking",
    image: "/images/661624e374361abf3aab3bf8_Claim Tracking.webp",
    bgColor: "bg-[#FF8080]",
    iconBgColor: "bg-[#FF8080]",
    iconColor: "text-white",
    icon: "/images/claim-tracking.svg",
  },
  {
    id: "hr-dashboard",
    title: "HR Dashboard",
    image: "/images/661624e3eae5afeed305b619_HR Dasboard Main Screen.webp",
    bgColor: "bg-[#36D6C3]",
    iconBgColor: "bg-[#36D6C3]",
    iconColor: "text-white",
    icon: "/images/hr-dashboard.svg",
  },
];
