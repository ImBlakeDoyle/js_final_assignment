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
                <Grid item xs={10}>
                    <div>
                        <Typography variant="h6" gutterBottom>
                        <p>Why don't you consider the luxury of staying at a beautiful villa?</p>
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default AboutSection;