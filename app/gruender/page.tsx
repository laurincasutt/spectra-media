import type { Metadata } from "next";
import { gruender } from "@/data/content";
import GruenderClient from "./GruenderClient";

export const metadata: Metadata = {
  title: gruender.meta.title,
  description: gruender.meta.description,
};

export default function GruenderPage() {
  return <GruenderClient />;
}
