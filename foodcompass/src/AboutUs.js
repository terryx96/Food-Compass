import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import './App.css';
const AboutUs = () =>{
    return(
        <div>
                <div id = "AboutUs" className = {css(styles.person)}>
                <span className = {css(styles.p)}> Terry Wade </span> is a computer science student at Valparaiso University. On this project,
                he worked primarily on front-end development, something completely new to him!
                </div>
                <div id = "AboutUs" className = {css(styles.person)}>
                <span className ={css(styles.p)}> Kyle Nguyen </span> is a computer science student at DePauw University. On this project,
                he worked primarily on data-analysis, something that took a lot of work!
                </div>
                <div id = "AboutUs" className = {css(styles.person)}>
                <span className = {css(styles.p)}> Noah Salaman </span> is a computer science student at IUPUI. On this project,
                he worked with Stephen on backend and research!
                </div>
                <div id = "AboutUs" className = {css(styles.person)}>
                <span className = {css(styles.p)}> Stephen Crowell </span> is a computer science student at Rose-Hulman Institute of Technology. On this project,
                he worked with Noah on backend and research!
                </div>
        </div>
    );
}


const styles = StyleSheet.create({
    person:{
        backgroundColor: 'rgba(255,255,255,.8)',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        border: '1px solid rgba(100,100,100,.8)',
        borderRadius: "50px",
        textAlign: 'center',
        paddingTop: '10px',
        padding: '10px',
        paddingBottom: '10px',
        boxShadow: "25px 5px 50px rgba(0,0,0,.4)",
    },
    img: {
        display: 'flex',
        width: '50%',
        height: 'auto',
    },
    p:{
        fontSize: '18px',
        fontWeight: 'bold',
    }
});

export default AboutUs;