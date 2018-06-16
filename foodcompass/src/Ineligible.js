import { StyleSheet, css } from 'aphrodite';
import React from 'react';

class Eligible extends React.Component {
    
    render() {
        return(
            <div className = {css(styles.input)} key = {this.props}>
                        <p>You are ineligible for {this.props.program} due to:  </p>
                        <ul>
                            {this.props.reasons.map(reason => <li>{reason}</li>)}
                        </ul>
                        <a href={this.props.link} target='_blank'>Click here for more information on {this.props.program}</a>
            </div>
        )
    }
}


const styles = StyleSheet.create({
    

});

export default Eligible;