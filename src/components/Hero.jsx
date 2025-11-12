import React from "react";
import { useTranslation } from "react-i18next";
import Main from "../assets/main.svg"
function Hero() {
    const { t } = useTranslation();

    return (
        <section className="max-w-[1140px] mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6 text-center md:text-left">
                <h2 className="text-5xl md:text-7xl font-bold text-[#34313D] leading-tight">
                    {t("hero_title")}
                </h2>
                <p className="text-gray-500 text-lg">{t("hero_text")}</p>
                <button className="bg-cyan-400 hover:bg-cyan-500 text-white px-9 py-3.5 rounded-full text-base font-bold transition-colors">
                    {t("get_started")}
                </button>
            </div>

            <div className="flex-1">
                <img src={Main} alt="Illustration" className="w-full" />
            </div>
        </section>
    );
}

export default Hero;
