import React from "react";
import { useTranslation } from "react-i18next";
import purpleBg from "../assets/purple.svg";

function CTASection() {
    const { t } = useTranslation();

    return (
        <section
            className="relative overflow-hidden text-white text-center py-20 bg-[#3b3054]"
            style={{
                backgroundImage: `url(${purpleBg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-6">{t("boost")}</h2>
                <button className="bg-cyan-400 hover:bg-cyan-500 text-white px-10 py-3.5 rounded-full text-lg font-bold transition">
                    {t("get_started")}
                </button>
            </div>
        </section>
    );
}

export default CTASection;
