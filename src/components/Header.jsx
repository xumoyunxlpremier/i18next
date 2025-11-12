import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
    const { t, i18n } = useTranslation();
    const [open, setOpen] = useState(false);

    const languages = [
        { code: "en", label: "English", flag: "EN" },
        { code: "ru", label: "Русский", flag: "🇷🇺" },
        { code: "uz", label: "Oʻzbek", flag: "🇺🇿" },
        { code: "ko", label: "한국어", flag: "🇰🇷" },
    ];

    const changeLang = (lang) => {
        i18n.changeLanguage(lang);
        setOpen(false);
        document.title = t("title");
    };

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <nav className="max-w-[1140px] mx-auto px-6 py-6 flex items-center justify-between">
                <div className="flex items-center gap-12">
                    <h1 className="text-3xl font-bold text-gray-900 tracking-tight">{t("logo")}</h1>
                    <div className="hidden md:flex gap-8 text-gray-600 font-medium text-sm">
                        <a href="#features" className="text-[#9E9AA8] transition">{t("features")}</a>
                        <a href="#pricing" className="text-[#9E9AA8] transition">{t("pricing")}</a>
                        <a href="#resources" className="text-[#9E9AA8] transition">{t("resources")}</a>
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <button className="text-gray-500 hover:text-gray-900 font-medium text-sm transition">
                        {t("login")}
                    </button>
                    <button className="bg-cyan-400 hover:bg-cyan-500 text-white px-6 py-2 rounded-full font-medium text-sm transition">
                        {t("signup")}
                    </button>

              
                    <div className="relative">
                        <button
                            onClick={() => setOpen(!open)}
                            className="flex items-center gap-2 border border-gray-300 px-3 py-1.5 rounded-full bg-white hover:bg-gray-50 shadow-sm transition font-medium text-sm"
                        >
                             {i18n.language.toUpperCase()}
                            <span className={`transition-transform ${open ? "rotate-180" : "rotate-0"}`}>
                                ▼
                            </span>
                        </button>

                        <AnimatePresence>
                            {open && (
                                <motion.ul
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.15 }}
                                    className="absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-50"
                                >
                                    {languages.map((lang) => (
                                        <li
                                            key={lang.code}
                                            onClick={() => changeLang(lang.code)}
                                            className="flex items-center gap-2 px-4 py-2 hover:bg-cyan-50 cursor-pointer text-gray-700 text-sm font-medium transition"
                                        >
                                            <span className="text-lg">{lang.flag}</span>
                                            {lang.label}
                                        </li>
                                    ))}
                                </motion.ul>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
