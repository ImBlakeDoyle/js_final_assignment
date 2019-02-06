import React from 'react';
import "./../../styles/HeroSection.css";
import AboutSection from "./../sections/AboutSection";
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    paper: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        display: "inline-block"
    },
    paperDiv: {
        maxWidth: "400px"
    }
});

class HeroSection extends React.Component {

    render() {
        const paperExists = this.props.paperExists;
        let paper;

        if (paperExists) {
            paper =                     
                <Paper className={this.props.classes.paper} elevation={5}>  
                    <div className={this.props.classes.paperDiv}>
                        <AboutSection 
                            heading={this.props.heading}
                            content={this.props.content}
                        />
                    </div>
                </Paper>
        }

        return (
            <header>
                <div className="hero-image" style={{backgroundImage: `url(${this.props.img})`}}>
                    <>
                        {paper}
                    </>
                </div>
            </header>
        );
    }
}

export default withStyles(styles)(HeroSection);