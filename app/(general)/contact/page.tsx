import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto Page 👋 ",
  description: "Contacto Description",
  keywords: ["contacto", "contact"],
};

export default function Contact() {
  return (
    <>
      <span className="text-7xl">Contacto</span>
    </>
  );
}
