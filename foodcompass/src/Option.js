import React from 'react';
import {StyleSheet, css} from '../node_modules/aphrodite';
import './App.css';


const Option = ({text, loadForm}) => {
    return (
        <button id = "button" className = {css(styles.button)} onClick = {loadForm}> {text} </button>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: '50px',
        border: '1px solid rgba(155,155,155, .8)',
        color: 'white',

        paddingTop: '30px',
        paddingBottom: '30px',
        paddingRight: '60px',
        paddingLeft: '60px',

        left: "35%",
        top: '40%',

        position: 'absolute',

        fontSize: '25px',

        transition: "backgroundColor 1s ease-out",

        ':hover':{
            cursor: 'pointer',
            
        },

       


    }

});


export default Option;