import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const AboutSection = (props) => {
    return (
        <Grid container
            spacing={32}
            justify="center"
        >
            <Grid item xs={11}>
                <Typography variant="h5" gutterBottom>
                    {props.heading}
                </Typography>
                {/* <Typography variant="body1" gutterBottom> */}
                {props.content}
                {/* </Typography> */}
            </Grid>
        </Grid>
    )
}

export default AboutSection;