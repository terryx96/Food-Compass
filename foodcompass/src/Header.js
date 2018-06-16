import React from 'react';
import {StyleSheet, css} from 'aphrodite'; 
import './App.css';

const Header = () =>{
    return(
        <h1 id = "Header" className = {css(styles.header)}>FOOD COMPASS</h1>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "transparent",
        color: "red",
        fontSize: "5.5rem",
        margin: 0,
        border: 0,
        padding: "1px",
    },
});

export default Header;