import React from "react";
import "./i18n";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AdvancedStats from "./components/AdvancedStats";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="font-poppins overflow-x-hidden">
            <Header />
            <Hero />
            <AdvancedStats />
            <CTASection />
            <Footer />
        </div>
    );
}

export default App;
