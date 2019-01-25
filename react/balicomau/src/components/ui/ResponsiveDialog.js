import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import WizardForm from '../forms/WizardForm';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    paperDialog: {
        minHeight: '35vh',
        maxHeight: '35vh',
        width: '50vh',
        [theme.breakpoints.down('xs')]: {
            minHeight: '100vh',
            maxHeight: '100vh',
            width: '100vh'
        }
    },
    title: {
        [theme.breakpoints.down('xs')]: {
            textAlign: 'center'
        }   
    }
})

const ResponsiveDialog = (props) => {
    const { fullScreen, classes } = props;

    return (
        <Dialog
            fullScreen={fullScreen}
            PaperProps={{ 
                className: classes.paperDialog
            }}
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="form-dialog-title"
            // fullWidth
        >
        <DialogTitle id="form-dialog-title" className={classes.title}>Select dates</DialogTitle>
            <DialogContent>
                <WizardForm 
                    onClose={props.handleClose}
                />
            </DialogContent>
        </Dialog>
    )
}

export default withStyles(styles)(withMobileDialog({breakpoint: 'xs'})(ResponsiveDialog));