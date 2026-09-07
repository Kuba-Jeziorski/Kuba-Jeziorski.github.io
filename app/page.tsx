import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Kuba-Jeziorski Portfolio",
  description: "Welcome page",
};

export default function HomePage() {
  redirect("/projects");
}
