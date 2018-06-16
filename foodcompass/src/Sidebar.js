import React, {Component} from 'react';
import {StyleSheet, css} from 'aphrodite';

class Sidebar extends Component {
    render(){
        return(
            <div className = {css(styles.sideBar)}> <p className = {css(styles.p)}>Food Compass</p>
                <button onClick = {this.handleClick} value = "0" className = {css(styles.div)}>Home</button>
                <br/><button onClick = {this.handleClick} value = "1" className = {css(styles.div)}>About us</button>
                <br/><button onClick = {this.handleClick} value = "2" className = {css(styles.div)}>Eligibility</button>
                <br/><button onClick = {this.handleClick} value = "3" className = {css(styles.div)}>Nearby Aid</button>
            </div>
        );
    }

    handleClick = (ev) => {
        this.props.getPage(ev.target.value);
    }
}

const styles = StyleSheet.create({
    sideBar: {
        backgroundColor: 'rgba(33,77,100,.9)',
        height: '200vh',
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
        marginLeft: '1px',
        color: 'white',
        transition: '.3s ease-out',
        backgroundColor: 'transparent',
        outline: 'none',
        border: 'none',
        paddingRight: '50px',
        fontSize: '19px',
        width: '9.9rem',


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