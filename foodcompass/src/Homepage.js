import React from 'react';
import {StyleSheet, css} from 'aphrodite';

const Homepage = () => {
    return(
        <div style = {styles.main}>Welcome to Food Compass</div>
    );
}

const styles = {
    main:{
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: "center",
        backgroundColor: 'white',
        borderRadius: '20px',
        border: '1px solid rgba(100,100,100,.8)',
        width: '70%',
        height: '100vh',
        paddingTop: '10px',
        paddingBottom: '10px',
        boxShadow: "25px 5px 50px rgba(0,0,0,.8)",

    }
}

export default Homepage;