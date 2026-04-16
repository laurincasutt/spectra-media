import type { Metadata } from "next";
import { prozess } from "@/data/content";
import ProzessClient from "./ProzessClient";

export const metadata: Metadata = {
  title: prozess.meta.title,
  description: prozess.meta.description,
};

export default function ProzessPage() {
  return <ProzessClient />;
}
