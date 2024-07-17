import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page 📝",
  description: "About Page Description ✍️ ",
  keywords: ["about page", "sobre la pagina", "sobre mi"],
};

export default function About() {
  return (
    <>
      <span className="text-7xl">About Page</span>
    </>
  );
}
