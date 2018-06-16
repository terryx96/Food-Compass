import React, {Component} from 'react';
import {StyleSheet, css} from 'aphrodite';

class Prompt extends Component {
    state = {
        id: this.props.info.id,
        text: this.props.info.text,
        value: this.props.info.value,
        type: this.props.info.type,
    }

    render() {
        return(
            <div>
                <p className = {css(styles.p)}>{this.state.text}</p>
                <input className = {css(styles.field)} type = {this.getType()} onChange = {this.handleChange}></input>
            </div>
        );
    }

    handleChange = (ev) => {
        this.setState({value: ev.target.value}); 
    }

    getType = () => {
        let output = "number";
        switch(this.state.type){
            case 0: output = "number"; break;
            case 1: output = "text"; break;
            default: break;
         }
         return output;
    }
}

const styles = StyleSheet.create({
    p: {
        color: 'rgba(160,160,160,.8)'
    },

    field: {
        left: '50%',
        backgroundColor: "blue",
        borderRadius: '10px',
    }
});

export default Prompt;