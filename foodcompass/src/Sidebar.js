import React from 'react';
import {StyleSheet, css} from 'aphrodite';

const Sidebar = ({ links }) => {
    return(
        <div className = {css(styles.sideBar)}> <p className = {css(styles.p)}>Food Compass</p>
            <div className = {css(styles.div)}>Home</div>
            <div className = {css(styles.div)}>About us</div>
            <div className = {css(styles.div)}>Eligibility</div>
            <div className = {css(styles.div)}>Nearby Aid</div>
        </div>
    );
}

const styles = StyleSheet.create({
    sideBar: {
        backgroundColor: 'rgba(33,77,100,.9)',
        height: '100%',
        width: '10rem',
        position: 'absolute',
        size: 'auto',
        left: '-150px',
        alignContent: 'left',
        color: 'white',
        borderTopRightRadius: '10px',
        transition: '0.3s',
        

        ':hover': {
            left: '0rem',
        }
    },

    div: {
        marginTop: "10px",
        marginBottom: '10px',
        marginLeft: '3px',
        color: 'white',
        transition: '.3s ease-out',

        ':hover': {
            cursor: 'pointer',
            color: 'gray',
        }
    },

    p: {
        textDecoration: 'underline',
        fontSize: '20px',
    }


});

export default Sidebar;