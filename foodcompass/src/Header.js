import React from 'react';
import {StyleSheet, css} from 'aphrodite'; 

const Header = () =>{
    return(
        <h1 className = {css(styles.header)}>FOOD COMPASS</h1>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#222",
        color: "white",
        fontSize: "5.5rem",
        margin: 0,
        border: 0,
        padding: "1px",
    },
});

export default Header;