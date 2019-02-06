import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

class TemporaryDrawer extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };  

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          {['Home', 'About', 'Features', 'Gallery', 'Contact', ].map((text) => (
            // <ListItemLink href="#Contact">
            <ListItemLink href={`#${text}`}>
            {/* <ListItem button key={text}> */}
              <ListItemText primary={text} />

            {/* </ListItem> */}
            </ListItemLink>
          ))}
        </List>
      </div>
    );

    return (
      <div>
        <MenuIcon onClick={this.toggleDrawer('left', true)} />
        <Drawer 
            anchor="left" 
            open={this.state.left} 
            onClose={this.toggleDrawer('left', false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);
