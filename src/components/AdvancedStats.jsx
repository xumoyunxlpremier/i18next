import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

function AdvancedStats() {
    const { t, i18n } = useTranslation();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Rasmlarni public papkasidan olish
    const icons = [
        "/icons/brand.svg",
        "/icons/records.svg",
        "/icons/customize.svg"
    ];

    useEffect(() => {
        setLoading(true);
        setError(null);

        axios
            .get(`https://json-api.uz/api/project/shortly/${i18n.language}`)
            .then((res) => {
                console.log("Data received:", res.data.data); // Debug
                setData(res.data.data || []);
                setLoading(false);
            })
            .catch((err) => {
                console.error("API Error:", err);
                setError(err.message);
                setLoading(false);
            });
    }, [i18n.language]);

    return (
        <section id="features" className="bg-[#f0f1f6] py-24">
            <div className="max-w-[1140px] mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-4 text-[#34313D]">
                    {t("advanced_stats")}
                </h2>
                <p className="text-gray-500 max-w-lg mx-auto mb-20">
                    {t("track_links")}
                </p>

                {/* Error holatini ko'rsatish */}
                {error && (
                    <div className="text-red-500 mb-4">
                        Ma'lumot yuklashda xatolik: {error}
                    </div>
                )}

                <div className="relative flex flex-col md:flex-row md:gap-8 gap-16 justify-center items-start">
                    <div className="absolute md:top-[120px] left-1/2 md:left-0 md:right-0 w-2 md:w-[80%] mx-auto h-full md:h-2 bg-cyan-400 md:translate-x-0 -translate-x-1/2 md:translate-y-0 translate-y-24 rounded-full"></div>

                    {loading
                        ? Array(3)
                            .fill(0)
                            .map((_, i) => (
                                <div
                                    key={i}
                                    className="relative bg-white p-8 rounded-xl shadow-md text-left animate-pulse w-full md:w-1/3 z-10"
                                >
                                    <div className="h-16 w-16 bg-gray-300 rounded-full mb-6"></div>
                                    <div className="h-6 bg-gray-300 w-3/4 mb-4 rounded"></div>
                                    <div className="h-4 bg-gray-300 w-full mb-2 rounded"></div>
                                    <div className="h-4 bg-gray-300 w-5/6 rounded"></div>
                                </div>
                            ))
                        : data.length > 0 ? (
                            data.map((card, index) => (
                                <div
                                    key={index}
                                    className={`relative bg-white p-10 rounded-xl shadow-md text-left w-full md:w-1/3 z-10 ${index === 1 ? "md:mt-12" : index === 2 ? "md:mt-24" : ""
                                        }`}
                                >
                                    <div className="absolute -top-10 left-8 bg-[#3A3054] p-4 rounded-full">
                                        <img
                                            src={icons[index]}
                                            alt={card.title}
                                            className="w-10 h-10"
                                            onError={(e) => {
                                                console.error("Image load error:", icons[index]);
                                                e.target.style.display = "none";
                                            }}
                                        />
                                    </div>

                                    <h3 className="text-xl font-bold mt-8 mb-3 text-[#34313D]">
                                        {card.title}
                                    </h3>
                                    <p className="text-gray-500 leading-relaxed">{card.text}</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500">Ma'lumot topilmadi</p>
                        )}
                </div>
            </div>
        </section>
    );
}

export default AdvancedStats;