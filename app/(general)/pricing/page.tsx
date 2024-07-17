import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Page 💰",
  description: "Pricing Page Description",
  keywords: ["pricing page", "precio"],
};

export default function PricingPage() {
  return (
    <>
      <span className="text-7xl">Pricing Page</span>
    </>
  );
}
