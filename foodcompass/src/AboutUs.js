import React from 'react';
import {StyleSheet, css} from 'aphrodite';

const AboutUs = () =>{
    return(
        <div>
                <div id = "AboutUs" className = {css(styles.person)}>
                <img className = {css(styles.img)} src = "images/terry.jpg" alt = "Terry"/>
                Terry Wade is a computer science student at Valparaiso University. On this project,
                he worked primarily on front-end development, something completely new to him!
                </div>

                <div id = "AboutUs" className = {css(styles.person)}>
                <img className = {css(styles.img)} src = "images/terry.jpg" alt = "Kyle"/>
                Kyle Nguyen is a computer science student at DePauw University. On this project,
                he worked primarily on data-analysis, something that took a lot of work!
                </div>

                <div id = "AboutUs" className = {css(styles.person)}>
                <img className = {css(styles.img)} src = "images/terry.jpg" alt = "Noah"/>
                Noah Salaman is a computer science student at IUPUI. On this project,
                he worked with Stephen on backend and research!
                </div>

                <div id = "AboutUs" className = {css(styles.person)}>
                <img className = {css(styles.img)} src = "images/terry.jpg" alt = "Stephen"/>
                Stephen Crowell is a computer science student at Rose-Hulman Institute of Technology. On this project,
                he worked with Noah on backend and research!
                </div>
        </div>
    );
}


const styles = StyleSheet.create({
    person:{
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        border: '1px solid rgba(100,100,100,.8)',
        borderRadius: "50px",
        textAlign: 'center',
        paddingTop: '10px',
        paddingBottom: '10px',
        boxShadow: "25px 5px 50px rgba(0,0,0,.4)",
    },
    img: {
        display: 'flex',
        width: '50%',
        height: '50%',
    }
});

export default AboutUs;