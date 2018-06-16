import React, {Component} from 'react';
import {StyleSheet, css} from '../node_modules/aphrodite';


class EligibilityForm extends Component {
    state = {
        prompts: [
             {id : 0, text: "Average Yearly Income", value: 0, type: 0},
             {id : 1, text: "Age", value: 0, type: 0},
             {id : 2, text: "Household Size: (i.e number of people)", value: 0, type: 0},
             {id : 3, text: "Other Government Benefits", value: 0, type: 0},
        ],
        values: [],
    }

    render(){
        return(
            <form className = "Form" onSubmit = {this.handleSubmit}>
                {this.state.prompts.map(p => 
                    <div>
                        <p>{p.text}</p>
                        <input key = {p.id} type = "number" />
                    </div>
                )}
                <button type = "submit">Submit</button>
            </form>    

        );
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        inputArr.map(a => alert(a.value));
        alert("Submit Handled");
    } 





}

const styles = StyleSheet.create({


});

export default EligibilityForm;