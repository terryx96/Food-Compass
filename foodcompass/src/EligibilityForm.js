import React, {Component} from 'react';
import {StyleSheet, css} from '../node_modules/aphrodite';
import Question from './Question';
import './App.css';
import Benefits from './Benefits';

class EligibilityForm extends Component {
    state = {
        visible: false,
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
                
                {this.state.visible ?
                (<Benefits data = {[Math.round(Math.random()),
                    Math.round(Math.random()),
                    Math.round(Math.random()),
                    Math.round(Math.random()),
                    Math.round(Math.random()),
                    Math.round(Math.random()),
                    Math.round(Math.random()),
                    Math.round(Math.random()),]} />) :
                    null
                }


            </form>    

        );
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        this.setState({visible: true});
        
        // let values = [...document.querySelectorAll("input")];
        // values = values.map(v => v.value);
        // this.setState({values});
        // alert(values);
    } 





}

const styles = StyleSheet.create({
        input: {
            width: '626px',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            border: '1px solid rgba(100,100,100,.8)',
            borderRadius: "50px",
            textAlign: 'center',
            paddingTop: '10px',
            paddingBottom: '10px',
            boxShadow: "25px 5px 50px rgba(0,0,0,.4)",
            
        }
});

export default EligibilityForm;