import React, {Component} from 'react';
import {StyleSheet, css} from '../node_modules/aphrodite';

import Prompt from './Prompt';

class EligibilityForm extends Component {
    state = {
        prompts: [
            {id : 0, text: "Average Yearly Income", value: 0, type: 0},
            {id : 1, text: "Age", value: 0, type: 0},
            {id : 2, text: "Household Size: (i.e number of people)", value: 0, type: 0},
            {id : 3, text: "Other Government Benefits", value: 0, type: 0},
        ]
    }

    render(){
        return(
            <form className = "Form">
                {this.state.prompts.map(p => 
                    <div>
                        <Prompt key = {p.id} info = {p} getValue = {this.getValue}/>
                    </div>
                )}
                <button type = "submit" onClick = {this.handleSubmit}>Submit</button>
            </form>
        );
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        alert("Submit Handled");
    } 

    getValue = (value) => {
        
    }

}

const styles = StyleSheet.create({


});

export default EligibilityForm;