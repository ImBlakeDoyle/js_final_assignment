import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
// import "./../../styles/MainFeatureSection.css"

const styles = theme => ({
    divBody: {
        height: "350px",
        width: "350px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        maxWidth: "500px",
        margin: "auto",
        [theme.breakpoints.up('md')]: {
            width: "500px",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "relative",
            maskImage: "linear-gradient(to left, transparent 10%, black 75%)"
          }
    },
    contentGrid: {
        [theme.breakpoints.up('md')]: {
            display: "flex",
            alignItems: "center"
          }
    },
    contentContainer: {
        textAlign: "left"
    }
});

class MainFeatureSection extends React.Component {
    render() {
        return (
            <>
                <Grid container justify="center" spacing={16}>
                    <Grid item xs={12} md={6}>
                        <div className={this.props.classes.divBody} style={{backgroundImage: `url(${this.props.img})`}}/>
                    </Grid>
                    <Grid item xs={12} sm={8} md={6} className={this.props.classes.contentGrid}>
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
        )
    }
}

export default withStyles(styles)(MainFeatureSection);