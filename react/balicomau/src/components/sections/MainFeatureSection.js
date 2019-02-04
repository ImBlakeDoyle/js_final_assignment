import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
// import "./../../styles/MainFeatureSection.css"

const styles = theme => ({
    divBody: {
        height: "600px",
        width: "auto",
        maxWidth: "1100px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        // linearGradient: "to right, rbga(255,0,0,0), rgba(255,0,0,1)"
        // background: 'linear-gradient(to right, #000000, #ffffff)'
    },
    divImage: {
        // height: "600px",
        // width: "auto",
        // maxWidth: "1100px",
        // maskImage: "linear-gradient(to left, transparent 25%, black 75%)"
        height: "400px",
        width: "535px"
    }
});

class MainFeatureSection extends React.Component {
    render() {
        return (
            <Grid container xs={12} spacing={0} justify="center">
                <Grid item md={6}>
                    <img src={this.props.img} className={this.props.classes.divImage}/>
                </Grid>
                <Grid item xs={10} md={6}>
                    <Typography variant="body2">
                        {this.props.content}
                    </Typography>
                </Grid>
            </Grid>

            // <>
            // <div className={this.props.classes.divBody} style={{backgroundImage: `url(${this.props.img})`}}>
            // </div>
            // <div>
            //     {this.props.content}
            // </div>
            // </>

            // div containing an image fading to the right with transparency
            // <div>
            //     <img src={this.props.img} className={this.props.classes.divImage}/>                
            // </div>
        )
    }
}

export default withStyles(styles)(MainFeatureSection);