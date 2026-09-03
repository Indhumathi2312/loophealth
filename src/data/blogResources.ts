export interface BlogArticle {
  id: string;
  title: string;
  excerpt?: string;
  date: string;
  image: string;
  link: string;
  category: string;
}

export const featuredArticle: BlogArticle = {
  id: "traditional-health-insurance",
  title: "Traditional Health Insurance vs. Health Assurance: The Key Differences and the...",
  excerpt: "Understand the potential impact of Health Assurance on healthcare access, outcomes, and financial well-being in India.",
  date: "August 25, 2023",
  image: "https://cdn.prod.website-files.com/61b1902b9f28a2a852f7012f/64e885f643656941ab136e13_123%20123M.jpg",
  link: "/post/traditional-health-insurance-vs-health-assurance-the-key-differences-and-the-future-of-healthcare",
  category: "Article",
};

export const sideArticles: BlogArticle[] = [
  {
    id: "financial-benefits",
    title: "The Financial Benefits of Health Assurance",
    date: "August 25, 2023",
    image: "https://cdn.prod.website-files.com/61b1902b9f28a2a852f7012f/64e7f00be776de1b27ab332e_Mask%20Group8a.jpg",
    link: "/post/the-financial-benefits-of-health-assurance",
    category: "Article",
  },
  {
    id: "health-assured-employee",
    title: "The Health Assured Employee: A New Wave in Employer Branding",
    date: "August 25, 2023",
    image: "https://cdn.prod.website-files.com/61b1902b9f28a2a852f7012f/64e7f071f5e285aef879c6e8_Mask%20Group4a.jpg",
    link: "/post/the-health-assured-employee-a-new-wave-in-employer-branding",
    category: "Article",
  },
  {
    id: "how-health-assurance-works",
    title: "How Health Assurance Works for Organizations",
    date: "August 25, 2023",
    image: "https://cdn.prod.website-files.com/61b1902b9f28a2a852f7012f/64e7ed7cbb3400e2d41f24fc_Mask%20Group6a.jpg",
    link: "/post/how-health-assurance-works-for-organizations",
    category: "Article",
  }
];
