import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    gridContainer: {
        // padding: "8px"
    },
    contentBody: {
        marginLeft: "auto",
        marginRight: "auto",
        display: "block",
        maxWidth: "460px"
    },
    imageSectionImg: {
        width: "100%",
        height: "auto",
        padding: "8px",
        maxWidth: "370px",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto"
    }
});


class ImageSection extends Component {
    render() {
        return (
            <Grid container
                className={this.props.classes.gridContainer}
                xs={12}
                spacing={8}
                justify="center"
            >
                <Grid item xs={12} md={8}>
                    <img src={this.props.img} className={this.props.classes.imageSectionImg}/>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body2" gutterBottom className={this.props.classes.contentBody}>
                        {this.props.content}
                    </Typography>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(ImageSection);