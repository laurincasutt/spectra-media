import type { Metadata } from "next";
import { service } from "@/data/content";
import ServiceClient from "./ServiceClient";

export const metadata: Metadata = {
  title: service.meta.title,
  description: service.meta.description,
};

export default function ServicePage() {
  return <ServiceClient />;
}
