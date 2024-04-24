import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Página es la de precios de mi servicio",
  keywords: ["Pricinng Page", "Omar", "Pricing"],
};

export default function PricingPage() {
  return (
    <>
      <span className="text-7xl">Pricing Page</span>
    </>
  );
}
