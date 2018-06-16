import { StyleSheet, css } from 'aphrodite';
import React from 'react';

class Question extends React.Component {
    state = {
        value: null,
    }
    
    handleChange = (ev) => {
        ev.preventDefault();
        const temp = ev.target.value
        this.setState({value: temp});
        this.props.updateValue(this.props.question.value, temp);
    }
    render() {
        if(this.props.question.type === 1) {
            return(
                <div key = {this.props.question.id}>
                    <p>{this.props.question.text}</p>
                    <input className = {css(styles.input)} key = {this.props.question.id} type = "text" onChange={this.handleChange} />
                </div> 
            )
        }
        return(
            <div key = {this.props.question.id}>
                        <p>{this.props.question.text}</p>
                        <input className = {css(styles.input)}key = {this.props.question.id} type = "number" onChange={this.handleChange} />
            </div>
        )
    }
}


const styles = StyleSheet.create({
    input:{
        borderRadius: '10px',
    }

});

export default Question;