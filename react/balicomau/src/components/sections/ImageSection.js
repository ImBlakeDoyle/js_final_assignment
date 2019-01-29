import React from 'react';
import "./../../styles/ImageSection.css"
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { checkPropTypes } from 'prop-types';

const ImageSection = (props) => {
    return (
        <div>
            <Grid container
                spacing={32}
                justify="center"
            >
                <Grid item xs={11}>
                    <div className="content">
                        <Typography variant="h6" gutterBottom>
                            {props.title}
                        </Typography>
                        <div className="image-section">
                            <img src={props.img}/>
                        </div>
                        <div className="text">
                            <Typography variant="body2" gutterBottom>
                                <p>The villa’s are within steps of the famous restaurant area and main shopping of Seminyak and Oberoi area.</p>
                                <p>The international airport is approx 30 mins away and is also about the same distance to the popular “Bali Nirvana Golf Course” & the famous “Tanah Lot Temple”</p>
                            </Typography>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default ImageSection;