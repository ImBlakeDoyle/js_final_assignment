import React from 'react';
import "./../../styles/AboutSection.css"
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const AboutSection = () => {

    return (
        <Grid container
            spacing={32}
            justify="center"
        >
            <Grid item xs={11}>
                <Typography variant="h5" gutterBottom>
                    Why don't you consider the luxury of staying at a beautiful villa?
                </Typography>
                <Typography variant="body1" gutterBottom>
                    <p>Villa dewata can offer you 2 beautiful luxurious villas each with air-conditioned bedrooms, lovely ensuite bathrooms, spacious open-plan living and dining areas, and your own private swimming pool, aswell as trained staff including a fulltime Chef and butler to tend to your every need.</p>
                    
                    <p>Set in a quiet compound (of almost 1 acre) The villa’s are within steps of the famous restaurant area and main shopping of Seminyak and Oberoi area. The international airport is approx 30 mins away and is also about the same distance to the popular “Bali Nirvana Golf Course” and the famous “Tanah Lot Temple”</p>

                    <p>Villa dewata is made up of 2 villas, one 4 bedroom villa, and one 5 bedroom villa. Both villas can be combined to comfortably hold up to 18 people. Additional bedding can be arranged.</p>
                </Typography>
            </Grid>
        </Grid>
    )
}

export default AboutSection;