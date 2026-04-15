"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="relative flex items-center rounded-lg bg-white/6 border border-white/10 p-0.5 gap-0">
      {/* Sliding pill */}
      <motion.div
        className="absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-md bg-[#0066FF] shadow-[0_0_10px_rgba(0,102,255,0.4)]"
        animate={{ left: lang === "de" ? "2px" : "calc(50%)" }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />
      <button
        onClick={() => setLang("de")}
        className={`relative z-10 px-2.5 py-1 rounded-md text-xs font-semibold transition-colors duration-200 min-w-[30px] ${
          lang === "de" ? "text-white" : "text-[#A1A1AA] hover:text-white"
        }`}
        aria-pressed={lang === "de"}
      >
        DE
      </button>
      <button
        onClick={() => setLang("en")}
        className={`relative z-10 px-2.5 py-1 rounded-md text-xs font-semibold transition-colors duration-200 min-w-[30px] ${
          lang === "en" ? "text-white" : "text-[#A1A1AA] hover:text-white"
        }`}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
    </div>
  );
}
