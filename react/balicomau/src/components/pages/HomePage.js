import React, { Component } from "react";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import FeatureSection from "../sections/FeatureSection";

class HomePage extends Component {
    render () {
        return (
            <div>
                <HeroSection 
                    title="Villa Dewata"
                    img="/why-stay.jpg"
                    price="From $800 / night"
                    buttonText="Book"
                />
                <AboutSection />
                <FeatureSection />
            </div>
        )
    };
}

export default HomePage;