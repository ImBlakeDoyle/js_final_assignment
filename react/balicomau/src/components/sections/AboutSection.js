import React from 'react';
import "./../../styles/AboutSection.css"
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const AboutSection = () => {

    return (
        <div>
            <Grid container
                spacing={32}
                justify="center"
            >
                <Grid item xs={11}>
                    <div className="content">
                        <Typography variant="h6" gutterBottom>
                            Why don't you consider the luxury of staying at a beautiful villa?
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Villa Dewata can offer you 2 beautiful luxurious villas each with air-conditioned bedrooms, lovely ensuite bathrooms, spacious open-plan living and dining areas, and your own private swimming pool, aswell as trained staff including a fulltime Chef and butler to tend to your every need.
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default AboutSection;