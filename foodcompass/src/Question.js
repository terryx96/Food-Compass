import { StyleSheet, css } from 'aphrodite';
import React from 'react';

class Question extends React.Component {
    state = {
        value: 0,
    }
    
    handleChange = (ev) => {
        ev.preventDefault();
        const temp = ev.target.value
        this.setState({value: temp});
        this.props.updateValue(this.props.question.value, temp);
    }
    render() {
        return(
            <div className = {css(styles.input)} key = {this.props.question.id}>
                        <p>{this.props.question.text}</p>
                        <input key = {this.props.question.id} type = "number" value={this.state.value} onChange={this.handleChange} />
            </div>
        )
    }
}


const styles = StyleSheet.create({
    

});

export default Question;