import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bookings | Too Good",
  description: "Book an appointment with Too Good. Tell us about your project and pick a time.",
};

export default function BookingsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
