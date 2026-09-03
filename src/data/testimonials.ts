export interface Testimonial {
  id: string;
  quote: string;
  authorName: string;
  authorTitle: string;
  authorImage: string;
}

export const testimonialSectionData = {
  title: "Don’t just take our\nword for it.",
  subtitle: "Here are some of our success stories from our customers.",
  quoteIcon: "/images/64cbc7420f42ed31ef73ee45_quote icon.png",
  dotPattern: [
    [1, 0, 0, 0, 1],
    [1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1]
  ],
  testimonials: [
    {
      id: "ratnadeep-ray",
      quote: "Loop is 100% the right decision. \nTheir claim process is very seamless.",
      authorName: "Ratnadeep Ray",
      authorTitle: "VP HR , Druva",
      authorImage: "/images/682eb2af5d011d38dd46f8d1_HR 1 (2).jpg",
    },
    {
      id: "devangi-kamra",
      quote: "Loop brings something special with their focus on claims prevention",
      authorName: "Devangi Rindani Kamra",
      authorTitle: "Chief People Officer, Technogise",
      authorImage: "/images/64d5563fdb056418de447299_Devangi kamra.jpg",
    },
    {
      id: "sambhavi-sharma",
      quote: "Loop's wellness sessions are a super hit with our team!",
      authorName: "Sambhavi Sharma",
      authorTitle: "CHRO, Josh Software",
      authorImage: "/images/682eb218474c7934ef64b370_HR 2 (2).jpg",
    },
    {
      id: "deepak-rajan-nair",
      quote: "I save hours every week because Loop is directly integrated with our HRMS",
      authorName: "Deepak Rajan Nair",
      authorTitle: "HR Manager at Rivulis Irrigation India",
      authorImage: "/images/64d558486a48f22a2c499e91_Deepak Rajan Nair.jpg",
    },
    {
      id: "joel-sebastian",
      quote: "Loop has disrupted the market. My employees consult a doctor in just two clicks, no wait.",
      authorName: "Joel Sebastian",
      authorTitle: "India HR Lead, Esper",
      authorImage: "/images/64d558eb60aa451cd465495c_Joel Sebastian.jpg",
    }
  ]
};
