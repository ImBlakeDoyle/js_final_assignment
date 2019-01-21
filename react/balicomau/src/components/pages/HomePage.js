import React, { Component } from "react";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import FeatureSection from "../sections/FeatureSection";
import FeatureContainer from "../sections/FeatureContainer";
import Grid from '@material-ui/core/Grid';
import ImageSection from "../sections/ImageSection";

class HomePage extends Component {
    render () {
        return (
            <div>
                <div className="header">
                    <HeroSection 
                        title="Villa Dewata"
                        img="/hero-image.jpg"
                        price="From $800 / night"
                        buttonText="Book"
                    />
                </div>
                <div className="content">
                    <AboutSection />
                    <FeatureContainer 
                        feature1={
                            <FeatureSection 
                                image="/accommodation.jpg"
                                title="Accommodation"
                                content="Villa Dewata has 4 air-conditioned bedrooms each with King sized bed, ensuite bathroom. Two front bedrooms overlook the pool, and contain baths within their ensuites. Each bedroom has an ottoman which can be used as extra bedding if required."
                                expandedContent="Large open plan living, and dining areas with ceiling fans to keep you cool, this villa has concertina doors that can open up the living area to the swimming pool and garden to make it feel even more spacious."
                            />
                        }
                        feature2={
                            <FeatureSection 
                                image="/facilities.jpg"
                                title="Facilities"
                                content="Villa Dewata has 4 air-conditioned bedrooms each with King sized bed, ensuite bathroom. Two front bedrooms overlook the pool, and contain baths within their ensuites. Each bedroom has an ottoman which can be used as extra bedding if required."
                                expandedContent="Large open plan living, and dining areas with ceiling fans to keep you cool, this villa has concertina doors that can open up the living area to the swimming pool and garden to make it feel even more spacious."
                            />
                        }
                        feature3={
                            <FeatureSection 
                            image="/services.jpg"
                            title="Services"
                            content="Villa Dewata has 4 air-conditioned bedrooms each with King sized bed, ensuite bathroom. Two front bedrooms overlook the pool, and contain baths within their ensuites. Each bedroom has an ottoman which can be used as extra bedding if required."
                            expandedContent="Large open plan living, and dining areas with ceiling fans to keep you cool, this villa has concertina doors that can open up the living area to the swimming pool and garden to make it feel even more spacious."
                        />
                        }
                    />
                    <ImageSection 
                        img="/map.jpg"
                    />
                    
                </div>
            </div>
        )
    };
}

export default HomePage;