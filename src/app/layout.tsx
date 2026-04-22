import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ANDASO | Premium Work Boots",
  description:
    "Professional-grade safety boots engineered for maximum traction on shingle and metal roof surfaces. Authorized retailer of Cougar Paws roofing boots and accessories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
