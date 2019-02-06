import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import WizardForm from '../forms/WizardForm';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    paperDialog: {
        minHeight: '50vh',
        maxHeight: '70vh',
        width: '70vh',
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
        >
            <DialogContent>
                <WizardForm 
                    onClose={props.handleClose}
                />
            </DialogContent>
        </Dialog>
    )
}

export default withStyles(styles)(withMobileDialog({breakpoint: 'xs'})(ResponsiveDialog));