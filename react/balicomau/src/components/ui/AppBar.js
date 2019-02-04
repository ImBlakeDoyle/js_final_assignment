import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import BurgerMenu from './BurgerMenu';
import ResponsiveDialog from './../ui/ResponsiveDialog';
import { connect } from "react-redux";
import { setFormOpen } from "./../../actions";


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

// function ButtonAppBar(props) {
class ButtonAppBar extends React.Component {
  state = { open: false }

  handleClickOpen = () => {
    // this.setState({ open: true });
    this.props.setFormOpen(true);
  }

  handleClose= () => {
    // this.setState({ open: false });
    this.props.setFormOpen(false);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="fixed" color="white">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <BurgerMenu />
            </IconButton>
            <Typography variant="h4" color="inherit" className={classes.grow}>
              Villa Dewata
            </Typography>
            <Button variant="contained" color="primary" onClick={this.handleClickOpen}>Book</Button>
          </Toolbar>
          <ResponsiveDialog 
            open={this.props.formOpen}
            handleClose={this.handleClose}
          />
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      formOpen: state.formOpen
  };
}


export default withStyles(styles)(connect(mapStateToProps, {
  setFormOpen
})(ButtonAppBar));