import React from 'react';
import {StyleSheet, css} from 'aphrodite'; 
import './App.css';

const Header = () =>{
    return(
        <h1 id = "Header" className = {css(styles.header)}>BENEFOOD</h1>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "rgba(155,15,110,.7)",
        color: "red",
        fontSize: "5.5rem",
        margin: '10px',
        width: '99%',
        padding: "0px",
        overflow: 'hidden',
        borderRadius: '30px',
        border: '1px solid rgba(150,150,150,.8)',
    },
});

export default Header;