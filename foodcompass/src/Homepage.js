import React from 'react';
import {StyleSheet, css} from 'aphrodite';

const Homepage = (props) => {
    return(
        <div style = {styles.main}>
            <p style = {styles.p}>Welcome to BeneFood</p>
            <p style = {styles.body}>  
                <p style = {styles.leads}>Our Mission:</p> 
                Our mission at BeneFood is to connect Indiana residents to food aid 
                programs and help residents dealing with food insecurity. Bringing 
                all of these amazing programs into one simple site could provide many 
                residents with easy access to important programs.
                </p>
        </div>
    );
}

const styles = {
    main:{
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: "center",
        backgroundColor: 'rgba(255,255,255,.8)',
        borderRadius: '20px',
        border: '1px solid rgba(100,100,100,.8)',
        width: '70%',
        height: 'auto',
        paddingTop: '10px',
        paddingBottom: '10px',
        boxShadow: "25px 5px 50px rgba(0,0,0,.8)",
        overflow: 'auto',

    },
    p:{
        fontSize: '30px',
        textDecoration: 'underline',
    },
    body:{
        fontSize: '20px',
        color: 'rgba(100,100,100,.9)',
        
    },
    leads:{
        fontSize: '25px',
        color: 'black',
        paddingBottom: '2px',
    }

}

export default Homepage;