import React from 'react';
import {StyleSheet, css} from 'aphrodite';

const Homepage = () => {
    return(
        <div style = {styles.main}>
            <p style = {styles.p}>Welcome to BeneFood</p>
            <p style = {styles.body}>  
                <p style = {styles.leads}>Our Mission:</p> 
                    We at BeneFood aspire to connect those in need with the proper government bodies
                    in an effort to make sure everyone receives the benefits they qualify for. Hunger has
                    become a devistating problem in today's society, and we hope to change that for the better
                    by creating a gateway of communication for those in need.
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
        height: '100vh',
        paddingTop: '10px',
        paddingBottom: '10px',
        boxShadow: "25px 5px 50px rgba(0,0,0,.8)",

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