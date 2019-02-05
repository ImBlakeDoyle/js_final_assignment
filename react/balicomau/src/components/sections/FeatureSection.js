import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  card: {
    maxWidth: 400,
    margin: 'auto',
  },
  media: {
    height: "300px",
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  cardContentBody: {
    height: "160px"
  }
});

class FeatureCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    return (
      <Card className={this.props.classes.card}>
        <CardMedia
          className={this.props.classes.media}
            image={this.props.image}
            title={this.props.title}
        />
        <CardContent className={this.props.classes.cardContentBody}>
            <Typography variant="h6">
                {this.props.title}
            </Typography>
            {/* <Typography component="p" className={this.props.classes.cardContentBody}> */}
            <Typography component="p">
                {this.props.content}
            </Typography>
        </CardContent>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
                {this.props.expandedContent}
            </Typography>
          </CardContent>
        </Collapse>
        <CardActions className={this.props.classes.actions} disableActionSpacing>
          <IconButton
            className={classnames(this.props.classes.expand, {
              [this.props.classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

FeatureCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FeatureCard);