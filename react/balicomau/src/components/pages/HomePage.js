import React, { Component } from "react";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import FeatureSection from "../sections/FeatureSection";
import FeatureContainer from "../sections/FeatureContainer";
import Grid from '@material-ui/core/Grid';
import ImageSection from "../sections/ImageSection";
import CarouselSection from "../sections/CarouselSection";
import WizardForm from "../forms/WizardForm";
import { withStyles } from '@material-ui/core/styles';
import UserForm from "../forms/UserForm";
import ContactUsContainer from "./../sections/ContactUsContainer";
import MainFeatureSection from "../sections/MainFeatureSection";
import AppBar from './../ui/AppBar';

const styles = theme => ({
    imageContainer: {
        // padding: "0px 0px 40px 0px"
        paddingBottom: "40px",

        // z-index testing
        zIndex: 1,
        position: "relative"
    },
    contentContainer: {
        padding: "0px 10px 40px 10px"
    },
    contactUsContainer: {
        padding: "0px 10px 40px 10px",
        backgroundColor: "whitesmoke"
    },
    contentBody: {
        // z-index testing
        zIndex: 2,
        position: "relative",
        marginTop: "-100px"
    }
})

class HomePage extends Component {
    
    render () {
        const {classes} = this.props;
        return (
            <>
                <div className="header-menu">
                    <AppBar />
                </div>
                <div className={classes.imageContainer}>
                    <HeroSection 
                        title="Villa Dewata"
                        img="/hero-image.jpg"
                        price="From $800 / night"
                        buttonText="Book"
                    />
                </div>
                <div className="content">
                    <div className={classes.contentContainer}>
                        <AboutSection 
                            heading="Why don't you consider the luxury of staying at a beautiful villa?"
                            content={[
                                <>
                                    <p>Villa dewata can offer you 2 beautiful luxurious villas each with air-conditioned bedrooms, lovely ensuite bathrooms, spacious open-plan living and dining areas, and your own private swimming pool, aswell as trained staff including a fulltime Chef and butler to tend to your every need.</p>
                        
                                    <p>Set in a quiet compound (of almost 1 acre) The villa’s are within steps of the famous restaurant area and main shopping of Seminyak and Oberoi area. The international airport is approx 30 mins away and is also about the same distance to the popular “Bali Nirvana Golf Course” and the famous “Tanah Lot Temple”</p>
                
                                    <p>Villa dewata is made up of 2 villas, one 4 bedroom villa, and one 5 bedroom villa. Both villas can be combined to comfortably hold up to 18 people. Additional bedding can be arranged.</p>
                                </>
                            ]}
                        />
                    </div>
                    <div className={classes.contentContainer}>
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
                    </div>
                    <div className={classes.contentContainer}>
                        {/* <HeroSection 
                            img="https://s3-ap-southeast-2.amazonaws.com/villa-dewata/seminyak-food.jpg"
                            // heading="Why don't you consider the luxury of staying at a beautiful villa?"
                            content={[
                                <>
                                    <p>Villa Dewata is situated in the Seminyak area only 50 metres from the busy Jalan Raya/Legian streets.</p>
                                    <p>With an abundance of shops and great restaurants all within walking distance the villa is close enough to all the action, yet being set back off the main road ensures a quiet and peaceful stay.</p>
                                    <p>The international airport is approx 30 mins away and is also about the same distance to the popular “Bali Nirvana Golf Course” and the famous “Tanah Lot Temple”</p>
                                </>
                            ]}
                            paperExists="true"
                        /> */}
                        <MainFeatureSection 
                            img="https://s3-ap-southeast-2.amazonaws.com/villa-dewata/seminyak-food.jpg"
                            content={[
                                <div>
                                    <p>Villa Dewata is situated in the Seminyak area only 50 metres from the busy Jalan Raya/Legian streets.</p>
                                    <p>With an abundance of shops and great restaurants all within walking distance the villa is close enough to all the action, yet being set back off the main road ensures a quiet and peaceful stay.</p>
                                    <p>The international airport is approx 30 mins away and is also about the same distance to the popular “Bali Nirvana Golf Course” and the famous “Tanah Lot Temple”</p>
                                </div>
                            ]}
                        />
                    </div>
                    <div className={classes.imageContainer}>
                        <CarouselSection />
                    </div>
                    <div className={classes.contactUsContainer}>
                        <ContactUsContainer />
                    </div>
                </div>
                </>
        )
    };
}

export default withStyles(styles)(HomePage);