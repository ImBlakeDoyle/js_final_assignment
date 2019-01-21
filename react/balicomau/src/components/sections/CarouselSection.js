import React from "react";
import Grid from '@material-ui/core/Grid';
import Carousel from "./../ui/Carousel";

const CarouselSection = (props) => {
    return (
        <Grid container 
            justify="center"
        >
            <Carousel images={[
                {
                    label: "Facilities", 
                    url: "/facilities.jpg",
                },
                {
                    label: "Services",
                    url: "/services.jpg",
                }
            ]}/>
        </Grid>
    )
}

export default CarouselSection;