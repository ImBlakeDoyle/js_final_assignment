import React from "react";
import Typography from '@material-ui/core/Typography';
import { Grid, withStyles } from "@material-ui/core";
import Divider from '@material-ui/core/Divider';
import PersonIcon from "@material-ui/icons/Person";
import CalendarIcon from "@material-ui/icons/CalendarToday";

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
    },
    iconParagraph: {
        display: 'flex',
        alignItems: 'center'
    },
    icon: {
        marginRight: "5px"
    }
});

function BookingSummary(props) {

    function toTwoDec(x) {
        return Number.parseFloat(x).toFixed(2);
    }

    return (
        <div className={props.classes.divBody}>
            <Grid container spacing={24} className={props.classes.gridContainer}>
                <Grid item xs={12}>
                    <Typography variant="h6" className={props.classes.heading}>Your Booking</Typography>
                </Grid>
                <Divider variant="middle" className={props.classes.sectionDivider}/>
                <Grid item xs={12}>
                    <Typography variant="body1" className={props.classes.iconParagraph}>
                        <PersonIcon className={props.classes.icon}/> {props.guests} Guests
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1" className={props.classes.iconParagraph}>
                        <CalendarIcon className={props.classes.icon}/> {props.checkin} to {props.checkout}
                    </Typography>
                </Grid>
                <Divider variant="middle" className={props.classes.sectionDivider}/>
                <Grid item xs={6}>
                    <Typography variant="body1">${toTwoDec(`${props.cost}`)} x {props.days} nights</Typography>
                </Grid>
                <Grid item xs={6} className={props.classes.totalAmountText}>
                    <Typography variant="body1">
                        ${toTwoDec(`${props.amount}`)}
                    </Typography>
                </Grid>
                <Divider variant="middle" className={props.classes.sectionDivider}/>
                <Grid item xs={6}>
                    <Typography variant="body1">Total</Typography>
                </Grid>
                <Grid item xs={6} className={props.classes.totalAmountText}>
                    <Typography variant="body2">
                        ${toTwoDec(`${props.amount}`)}
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default withStyles(styles)(BookingSummary);