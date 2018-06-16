import { StyleSheet, css } from 'aphrodite';
import React from 'react';

class Eligible extends React.Component {
    
    render() {
        return(
            <div className = {css(styles.input)} key = {this.props}>
                        <p>You are potentially eligible for {this.props.program}. {this.props.descrip}</p>
                        <a href={this.props.link} target='_blank'>Click here for more information</a>
            </div>
        )
    }
}


const styles = StyleSheet.create({
    

});

export default Eligible;