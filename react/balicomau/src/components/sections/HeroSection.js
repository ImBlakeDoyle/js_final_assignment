import React from 'react';
import "./../../styles/HeroSection.css";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import BurgerMenu from './../ui/BurgerMenu';
import Typography from '@material-ui/core/Typography';

const HeroSection = props => {
    return (
        <header>
                <div className="header-menu">
                <Grid container
                    spacing={32}
                    direction="row"
                    justify="space-evenly"
                    alignItems="center"
                >
                    <Grid item xs={3}>
                        <div className="burger-menu">
                            <BurgerMenu />
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="header-title">
                            <a href="index.html">
                                <Typography variant="h5" gutterBottom>
                                    {props.title}
                                </Typography>
                            </a>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained" color="primary">
                            {props.buttonText}
                        </Button>
                    </Grid>
                </Grid>
                </div>
                <div className="hero-image">
                    <img src={props.img}/>
                </div>
        </header>
    );
}

export default HeroSection;