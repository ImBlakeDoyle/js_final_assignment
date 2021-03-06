import React, { Component } from "react";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import FeatureSection from "../sections/FeatureSection";
import FeatureContainer from "../sections/FeatureContainer";
import CarouselSection from "../sections/CarouselSection";
import { withStyles } from '@material-ui/core/styles';
import ContactUsContainer from "./../sections/ContactUsContainer";
import MainFeatureSection from "../sections/MainFeatureSection";
import AppBar from './../ui/AppBar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    imageContainer: {
        paddingTop: "40px",
        zIndex: 1,
        position: "relative"
    },
    contentContainer: {
        padding: "80px 10px 0px 10px"
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
                <div className={classes.imageContainer} id="Home">
                    <HeroSection 
                        title="Villa Dewata"
                        img="https://s3-ap-southeast-2.amazonaws.com/villa-dewata/hero-image-min.jpg"
                        price="From $800 / night"
                        buttonText="Book"
                    />
                </div>
                <div className="contentZIndex" id='About'>
                    <div className={classes.contentContainer}>
                        <AboutSection 
                            heading="Why don't you consider the luxury of staying at a beautiful villa?"
                            content={
                                <>
                                    <Typography variant="body1" gutterBottom paragraph={true}>Villa dewata can offer you 2 beautiful luxurious villas each with air-conditioned bedrooms, lovely ensuite bathrooms, spacious open-plan living and dining areas, and your own private swimming pool, aswell as trained staff including a fulltime Chef and butler to tend to your every need.</Typography>
                    
                                    <Typography variant="body1" gutterBottom paragraph={true}>Set in a quiet compound (of almost 1 acre) The villa’s are within steps of the famous restaurant area and main shopping of Seminyak and Oberoi area. The international airport is approx 30 mins away and is also about the same distance to the popular “Bali Nirvana Golf Course” and the famous “Tanah Lot Temple”.</Typography>
                
                                    <Typography variant="body1" gutterBottom paragraph={true}>Villa dewata is made up of 2 villas, one 4 bedroom villa, and one 5 bedroom villa. Both villas can be combined to comfortably hold up to 18 people. Additional bedding can be arranged.</Typography>
                                </>
                            }
                        />
                    </div>
                    <div className={classes.contentContainer} id="Features">
                        <FeatureContainer 
                            feature1={
                                <FeatureSection 
                                    image="https://s3-ap-southeast-2.amazonaws.com/villa-dewata/accommodation.jpg"
                                    title="Accommodation"
                                    content="Villa Dewata has 4 air-conditioned bedrooms each with King sized bed, ensuite bathroom. Two front bedrooms overlook the pool, and contain baths within their ensuites."
                                    expandedContent={
                                        <>
                                            <Typography variant="body1" paragraph={true}>
                                                Each bedroom has an ottoman which can be used as extra bedding if required
                                            </Typography>
                                                
                                            <Typography variant="body1" paragraph={true}>
                                                Large open plan living, and dining areas with ceiling fans to keep you cool, this villa has concertina doors that can open up the living area to the swimming pool and garden to make it feel even more spacious.
                                            </Typography>
                                        </>
                                    }
                                />
                            }
                            feature2={
                                <FeatureSection 
                                    image="https://s3-ap-southeast-2.amazonaws.com/villa-dewata/facilities-min.jpg"
                                    title="Facilities"
                                    content="Relax by your own private pool, surrounded by luscious gardens or stay in your lounge equipped with air-conditioning, Satellite TV, DVD player, and WIFI."
                                    expandedContent={
                                        <>
                                        <Typography variant="body1" paragraph={true}>
                                            The TV room is air-conditioned and contains a spacious lounge, satellite TV and DVD player.
                                            There is also a stereo system, telephone and WIFI
                                        </Typography>
                                            
                                        <Typography variant="body1" paragraph={true}>
                                            There is also a kitchen fully equipped with gas cook top, microwave, toaster etc, as well as a separate chefs kitchen.
                                        </Typography>
                                        
                                        <Typography variant="body1" paragraph={true}>
                                            An outdoor setting surrounded by tropical gardens provides a relaxing area with 2 Bales (gazebos) containing lounge and day beds, perfect for your afternoon massage or drinks by the pool.
                                        </Typography>    
                                        </>
                                    }
                                />
                            }
                            feature3={
                                <FeatureSection 
                                    image="https://s3-ap-southeast-2.amazonaws.com/villa-dewata/services-min.jpg"
                                    title="Services"
                                    content="Included with your villa are a full time Chef, butler, housekeeping and laundry services. There is also a Pool cleaner, Gardener, and Security. In total there is 13 Staff to make sure your stay is perfect."
                                    expandedContent={
                                        <>
                                            <Typography variant="body1" paragraph={true}>
                                                Your Full time chef will prepare many Indonesian dishes, as well as some international cuisine. Simply choose a dish from the selection of cook books supplied and the staff will take care of the rest (ingredients at market prices – simply pay the butler).
                                            </Typography>
                                            
                                            <Typography variant="body1" paragraph={true}>
                                                Your Butler will make your stay a breeze. Should you require anything during your stay; from arranging transportation, to making reservations at your favourite restaurant, your butler will be happy to help your every need.
                                            </Typography>
                                            
                                            <Typography variant="body1" paragraph={true}>
                                                In addition to the Chef and Butler, your Villa will be serviced daily by our house keeping staff.
                                            </Typography>

                                            <Typography variant="body1" paragraph={true}>
                                                <ul>
                                                    <li>Complimentary airport pick up and transfer</li>
                                                    <li>Welcome drinks and cold towel on arrival</li>
                                                    <li>Inhouse Chef and Butler service Free of charge</li>
                                                    <li>Free grocery shopping service</li>
                                                    <li>Delivery service from local restaurants</li>
                                                    <li>Cot and high chairs</li>
                                                    <li>Reconfirmation of flights</li>
                                                    <li>IDD telephone and fax services</li>
                                                    <li>Free WIFI</li>
                                                    <li>Free air-conditioned car with driver for up to 10 hours a day</li>
                                                    <li>Safety deposit boxes</li>
                                                    <li>Security guards on entry</li>
                                                    <li>House Staff</li>
                                                    <li>Laundry service</li>
                                                </ul>
                                            </Typography>

                                            <Typography variant="body1" paragraph={true}>
                                                The following services can also be arranged for your stay:
                                                <ul>
                                                    <li>Babysitting</li>
                                                    <li>Massage or reflexology</li>
                                                    <li>Spa treatments</li>
                                                    <li>Tours</li>
                                                    <li>Catering for banquets and parties </li>
                                                </ul>
                                            </Typography>
                                        </>
                                    }
                            />
                            }
                        />
                    </div>
                    <div className={classes.contentContainer}>
                        <MainFeatureSection 
                            img="https://s3-ap-southeast-2.amazonaws.com/villa-dewata/seminyak-food.jpg"
                            title="Situated in the Seminyak area only 50 metres from the busy Jalan Raya/Legian streets"
                            content=
                                "With an abundance of shops and great restaurants all within walking distance the villa is close enough to all the action, yet being set back off the main road ensures a quiet and peaceful stay."
                        />
                    </div>
                    <div className={classes.contentContainer} id="Gallery">
                            <CarouselSection />
                    </div>
                    <div className={classes.contentContainer} id="Contact">
                        <ContactUsContainer />
                    </div>
                </div>
            </>
        )
    };
}

export default withStyles(styles)(HomePage);