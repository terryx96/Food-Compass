import React, {Component} from 'react';
import {StyleSheet, css} from '../node_modules/aphrodite';
import Question from './Question';
import './App.css';

class EligibilityForm extends Component {
    state = {
        prompts: [
             {id : 0, text: "Average Yearly Income", value: 'income', type: 0},
             {id : 1, text: "Age", value: 'age', type: 0},
             {id : 2, text: "Household Size: (i.e number of people)", value: 'householdSize', type: 0},
             {id : 3, text: "Other Government Benefits", value: 'govBenefits', type: 0},
        ],
    }

    render(){
        return(
            <form id = "Form" className = {css(styles.input)}  onSubmit = {this.handleSubmit}>
                {this.state.prompts.map(p => 
                    <Question updateValue={this.props.updateValue} question={p}/>
                )}
                <button type = "submit">Submit</button>
            </form>    

        );
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        // let values = [...document.querySelectorAll("input")];
        // values = values.map(v => v.value);
        // this.setState({values});
        // alert(values);
    } 





}

const styles = StyleSheet.create({
        input: {
            alignSelf: "center",
            textAlign: 'center',
            alignSelf: "center",
            borderRadius: '50px',
            width: '50%',
        }
});

export default EligibilityForm;