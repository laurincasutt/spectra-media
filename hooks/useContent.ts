import { useLanguage } from "@/context/LanguageContext";
import * as de from "@/data/content";
import * as en from "@/data/content.en";

export function useContent() {
  const { lang } = useLanguage();
  return lang === "en" ? en : de;
}
