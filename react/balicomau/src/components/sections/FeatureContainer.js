import React from 'react';
import Grid from '@material-ui/core/Grid';
import "./../../styles/FeatureContainer.css";

const FeatureContainer = (props) => {
    return (
        <Grid container 
            spacing={16}
            justify="center"
        >
            <Grid item xs={12} md={4}>
                {props.feature1}
            </Grid>
            <Grid item xs={12} md={4}>
                {props.feature2}
            </Grid>
            <Grid item xs={12} md={4}>
                {props.feature3}
            </Grid>
        </Grid>
    )
}

export default FeatureContainer;