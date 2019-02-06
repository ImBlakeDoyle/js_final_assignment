import React from "react";
import Typography from '@material-ui/core/Typography';
import { Grid, withStyles } from "@material-ui/core";
import Divider from '@material-ui/core/Divider';
import ContactsIcon from '@material-ui/icons/Contacts';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone'

const styles = () => ({
    divBody: {
        display: "flex",
        justifyContent: "center"
    },
    sectionDivider: {
        width: "90%"
    },
    heading: {
        textAlign: "center",
        paddingTop: "20px"
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
                    <Typography variant="body1" className={props.classes.iconParagraph}>
                        <ContactsIcon className={props.classes.icon}/> {first_name} {last_name}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1" className={props.classes.iconParagraph}>
                        <EmailIcon className={props.classes.icon}/> {email}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1" className={props.classes.iconParagraph}>
                        <PhoneIcon className={props.classes.icon}/> {phone}
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default withStyles(styles)(CustomerSummary);