import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
// import "./../../styles/MainFeatureSection.css"

const styles = theme => ({
    divBody: {
        height: "350px",
        width: "500px",
        // maxWidth: "1100px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        textAlign: "center",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        // linearGradient: "to right, rbga(255,0,0,0), rgba(255,0,0,1)"
        // background: 'linear-gradient(to right, #000000, #ffffff)'
        maskImage: "linear-gradient(to left, transparent 10%, black 75%)"
    },
    imageBody: {
        height: "700px",
        width: "auto",
        maxWidth: "1200px",
        // maskImage: "linear-gradient(to left, transparent 25%, black 75%)"

        // side by side styling
        // height: "400px",
        // width: "535px"
    },
    contentGrid: {
        display: "flex",
        alignItems: "center"
    },
    contentContainer: {
        // backgroundColor: "rgba(255,255,255,0.85)",
        // width: "500px",
        textAlign: "left"
        // padding: "0px 14px"
        // margin: "auto",
        // position: "absolute", 
        // top: "50%",
        // transform: "translateY(-50%) translateX(150%)"
    }
});

class MainFeatureSection extends React.Component {
    render() {
        return (
            // side by side
            // <Grid container xs={12} spacing={16} justify="center">
            //     <Grid item xs={12} md={6} className={this.props.classes.imageContainer}>
            //         <img src={this.props.img} className={this.props.classes.imageBody}/>
            //     </Grid>
            //     <Grid item xs={10} md={6}>
            //         <Typography variant="body2">
            //             {this.props.content}
            //         </Typography>
            //     </Grid>
            // </Grid>
            <>
            <Grid container>
                <Grid item xs={6}>
                    <div className={this.props.classes.divBody} style={{backgroundImage: `url(${this.props.img})`}}>
                    </div>
                </Grid>
                <Grid item xs={6} className={this.props.classes.contentGrid}>
                    <div className={this.props.classes.contentContainer}>
                        <Typography variant="h5">
                            {this.props.title}
                        </Typography>
                        <Typography variant="body1">
                            {this.props.content}
                        </Typography>
                    </div>
                </Grid>
            </Grid>
            </>

            // div containing an image fading to the right with transparency
            // <div className={this.props.classes.imageContainer}>
            //     <img src={this.props.img} className={this.props.classes.imageBody}/>                
            // </div>
        )
    }
}

export default withStyles(styles)(MainFeatureSection);