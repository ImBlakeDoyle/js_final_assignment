import React from 'react';
import ImageSection from './../sections/ImageSection';
import UserForm from './../forms/UserForm';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    containerTitle: {
        textAlign: "center",
        // marginTop: "10px"
    },
    gridItem: {
        // padding: "8px"
    },
    paper: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        display: "inline-block"
    },
    userFormContainer: {
        textAlign: "center"
    }
});

class ContactUsContainer extends React.Component {
    render() {
        return (
            <Grid container xs={12} spacing={16} justify="space-around">
                <Grid item xs={10} className={this.props.classes.containerTitle}>
                    <Typography variant="h4">
                        Contact Us
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} className={this.props.classes.gridItem}>
                    <ImageSection 
                        img="/map.jpg"
                        content={[
                            <div>
                                <ul>
                                    <li>Jln. Raya Basangkasa, Gg. Dewata NO. 15 B Seminyak - Kuta - Bali</li>
                                    <li>+62 (0)81238-33370</li>
                                    <li>info@bali.com.au</li>
                                </ul>
                            </div>
                        ]}
                    />
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
