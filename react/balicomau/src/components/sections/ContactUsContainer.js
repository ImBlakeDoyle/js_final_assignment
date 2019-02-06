import React from 'react';
import ImageSection from './../sections/ImageSection';
import UserForm from './../forms/UserForm';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

const styles = theme => ({
    containerTitle: {
        textAlign: "center",
        marginBottom: "10px"
    },
    formContainer: {
        maxWidth: "1000px",
        paddingBottom: "90px"
    },
    paper: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        display: "inline-block"
    },
    userFormContainer: {
        textAlign: "center"
    },
    listItem: {
        display: "flex",
        alignItems: "center",
        padding: "8px",
    },
    listIcon: {
        marginRight: "5px"
    }
});

class ContactUsContainer extends React.Component {
    render() {
        return (
            <Grid container spacing={16} justify="space-around" className={this.props.classes.formContainer}>
                <Grid item xs={12} className={this.props.classes.containerTitle}>
                    <Typography variant="h4">
                        Contact Us
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} className={this.props.classes.gridItem}>
                    <ImageSection img="https://s3-ap-southeast-2.amazonaws.com/villa-dewata/map.jpg" alt="Seminyak map">
                        <Typography variant="body2">
                            <li className={this.props.classes.listItem}><LocationOnIcon className={this.props.classes.listIcon}/> Jln. Raya Basangkasa, Gg. Dewata NO. 15 B Seminyak - Kuta - Bali</li>
                            <li className={this.props.classes.listItem}><PhoneIcon  className={this.props.classes.listIcon}/> +62 (0)81238-33370</li>
                            <li className={this.props.classes.listItem}><EmailIcon className={this.props.classes.listIcon}/>  info@bali.com.au</li>
                        </Typography>
                    </ImageSection>
                </Grid>
                <Grid item xs={12} md={6} className={this.props.classes.userFormContainer}>
                    <Paper className={this.props.classes.paper} elevation={1}>  
                        <UserForm />
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(ContactUsContainer);
