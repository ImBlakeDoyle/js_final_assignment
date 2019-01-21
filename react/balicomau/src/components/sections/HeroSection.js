import React from 'react';
import "./../../styles/HeroSection.css";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import BurgerMenu from './../ui/BurgerMenu';
import Typography from '@material-ui/core/Typography';
import AppBar from './../ui/AppBar';

const HeroSection = props => {
    return (
        <header>
            <div className="header-menu">
                <AppBar />
            </div>
            <div className="hero-image">
                <img src={props.img}/>
            </div>
        </header>
    );
}

export default HeroSection;