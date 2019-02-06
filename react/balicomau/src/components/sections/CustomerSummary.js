import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';
import { Grid, withStyles } from "@material-ui/core";
import Divider from '@material-ui/core/Divider';

const styles = () => ({
    divBody: {
        display: "flex",
        justifyContent: "center"
    },
    sectionDivider: {
        width: "90%"
    },
    heading: {
        textAlign: "center"
    },
    gridContainer: {
        width: "350px"
    },
    totalAmountText: {
        display: "flex",
        justifyContent: "flex-end"
    }
});

function CustomerSummary(props) {
    const { first_name, last_name, email, phone } = props;

    return (
        <div className={props.classes.divBody}>
            <Grid container spacing={24} className={props.classes.gridContainer}>
                <Grid item xs={12}>
                    <Typography variant="h6" className={props.classes.heading}>Your Information</Typography>
                </Grid>
                <Divider variant="middle" className={props.classes.sectionDivider}/>
                <Grid item xs={12}>
                    <Typography variant="body1">{first_name} {last_name}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1">{email}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1">{phone}</Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default withStyles(styles)(CustomerSummary);