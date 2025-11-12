import React from "react";
import { useTranslation } from "react-i18next";
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram } from "react-icons/fa";

function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="bg-[#232127] text-white py-16">
            <div className="max-w-[1140px] mx-auto px-6 grid md:grid-cols-5 gap-8 text-center md:text-left">
                <h3 className="text-3xl font-bold mb-6 md:mb-0">{t("logo")}</h3>

                <div>
                    <h4 className="font-semibold mb-3">{t("features")}</h4>
                    <p className="text-gray-400 text-sm">{t("footer_features")}</p>
                </div>

                <div>
                    <h4 className="font-semibold mb-3">{t("resources")}</h4>
                    <p className="text-gray-400 text-sm">{t("footer_resources")}</p>
                </div>

                <div>
                    <h4 className="font-semibold mb-3">{t("company")}</h4>
                    <p className="text-gray-400 text-sm">{t("footer_company")}</p>
                </div>

                {/* Icons */}
                <div className="flex justify-center md:justify-start space-x-4 mt-6 md:mt-0">
                    <a href="#" className="text-white hover:text-[#2acfcf]"><FaFacebookF /></a>
                    <a href="#" className="text-white hover:text-[#2acfcf]"><FaTwitter /></a>
                    <a href="#" className="text-white hover:text-[#2acfcf]"><FaPinterestP /></a>
                    <a href="#" className="text-white hover:text-[#2acfcf]"><FaInstagram /></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
