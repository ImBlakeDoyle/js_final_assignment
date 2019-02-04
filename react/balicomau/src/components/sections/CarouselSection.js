import React from "react";
import Grid from '@material-ui/core/Grid';
import Carousel from "./../ui/Carousel";

const CarouselSection = (props) => {
    return (
        <>
            <Carousel images={[
                {
                    label: "Outside View 1", 
                    url: "https://s3-ap-southeast-2.amazonaws.com/villa-dewata/outside-day-1.jpg",
                },
                {
                    label: "Outside View 2",
                    url: "https://s3-ap-southeast-2.amazonaws.com/villa-dewata/outside-night-1.jpg",
                },
                {
                    label: "Outside View 3",
                    url: "https://s3-ap-southeast-2.amazonaws.com/villa-dewata/outside-night-2.jpg",
                },
                {
                    label: "Pool View 1",
                    url: "https://s3-ap-southeast-2.amazonaws.com/villa-dewata/pool-day-1.jpg",
                },
                {
                    label: "Pool View 2",
                    url: "https://s3-ap-southeast-2.amazonaws.com/villa-dewata/pool-day-2.jpg",
                },
                {
                    label: "Pool View 3",
                    url: "https://s3-ap-southeast-2.amazonaws.com/villa-dewata/pool-night-1.jpg",
                },
                {
                    label: "Pool View 4",
                    url: "https://s3-ap-southeast-2.amazonaws.com/villa-dewata/pool-night-2.jpg",
                },
                {
                    label: "Bedroom 1",
                    url: "https://s3-ap-southeast-2.amazonaws.com/villa-dewata/bedroom1-1.jpg",
                },
                {
                    label: "Bedroom 2",
                    url: "https://s3-ap-southeast-2.amazonaws.com/villa-dewata/bedroom1-2.jpg",
                },
                {
                    label: "Bedroom 3",
                    url: "https://s3-ap-southeast-2.amazonaws.com/villa-dewata/bedroom2-1.jpg",
                },
                {
                    label: "Bathroom",
                    url: "https://s3-ap-southeast-2.amazonaws.com/villa-dewata/bathroom-1.jpg",
                },
                {
                    label: "Lounge",
                    url: "https://s3-ap-southeast-2.amazonaws.com/villa-dewata/lounge-1.jpg",
                },
                {
                    label: "Dining",
                    url: "https://s3-ap-southeast-2.amazonaws.com/villa-dewata/dining-1.jpg",
                }
            ]}/>
        </>
    )
}

export default CarouselSection;