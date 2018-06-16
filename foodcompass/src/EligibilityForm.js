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

        values: {
            age: null,
            income: null,
            householdSize: null,
            govBenefits: null,
        },

        aidPrograms: {
            SNAP: 1.3,
            TEFAP: 1.85,
            CSFP: 1.3,
            CACFP: {
                free: 1.85,
                reduced: 1.3
            },
            NSLP: {
                free: 1.85,
                reduced: 1.3
            },
            SBP: 1.3,
            WIC: 1.85,
        },

        federalPovertyAmt: {
            1: 1012,
            2: 1372,
            3: 1732,
            4: 2092,
            5: 2452,
            6: 2812,
            7: 3172,
            8: 3532,
            more: 360
        },

        isEligible: {},
    }
 
    updateValue = (key, value) => {
        const values = this.state.values;
        values[key] = value;

        this.setState({values});
    }
 
    render(){
        return(
            <form id = "Form" className = {css(styles.input)}  onSubmit = {this.handleSubmit}>
                {this.state.prompts.map(p => 
                    <Question updateValue={this.updateValue} question={p}/>
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
        
        this.runEligibilityCalcuation();
    } 

    runEligibilityCalcuation = () => {
        const isEligible = Object.keys(this.state.aidPrograms).map(program => {
            const result = this.calculateEligibility(program);
            return result;  
        })
        this.setState({isEligible});
    }

    calculateEligibility = (program) => {
        const income = this.state.values.income + this.state.values.govBenefits;
        let povertyLevel;
        if(this.state.values.householdSize > 8) {
            povertyLevel = this.state.federalPovertyAmt[this.state.values.householdSize] + (this.state.values.householdSize - 8) * this.federalPovertyAmt.more;
        } else {
            povertyLevel = this.state.federalPovertyAmt[this.state.values.householdSize]
        }

        const percentagePovertyLevel = this.state.aidPrograms[program] * povertyLevel;
        if(income < percentagePovertyLevel) {
            return true;
        } else {
            return false;
        }
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