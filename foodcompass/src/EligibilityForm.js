import React, {Component} from 'react';
import {StyleSheet, css} from '../node_modules/aphrodite';
import Question from './Question';
import ChildQuestion from './ChildQuestion';
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
             {id : 4, text: "How many children do you have? (if any)", value: 'numOfChildren', type: 1},   
        ],

        childQuestion: {id : 5, text: "Age of child", value: 'childrenAge', type: 0},

        values: {
            age: null,
            income: null,
            householdSize: null,
            govBenefits: null,
            childrenAge: {},
            numOfChildren: 0,
        },

        aidPrograms: {
            SNAP: 1.3,
            TEFAP: 1.85,
            CSFP: 1.3,
            childrenFood: {
                free: 1.85,
                reduced: 1.3
            },
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

        isEligible: {
            SNAP: {
              eligibility: false,
              reason: [],  
            },

            TEFAP: {
                eligibility: false,
                reason: [],  
            },

            CSFP: {
                eligibility: false,
                benefitAmt: 0,
                reason: [],  
            },

            childrenFood: {
                eligibility: false,
                freeOrReduced: 'free',
                reason: [],
            },

            WIC: {
              eligibility: false,
              benefitAmt: 0,
              reason: [],  
            },
        },
    }
 
    updateValue = (key, value) => {
        const values = this.state.values;
        values[key] = value;

        this.setState({values});
    }

    updateArray = (key, value, index) => {
        const values = this.state.values;
        const array = values[key];
        
        array[index] = value;
        values[key] = array;

        this.setState({values});
    }
 
    render(){
        const childrenQuestion = [];
        for(let i = 0; i < this.state.values.numOfChildren; i++) {
            childrenQuestion.push(<ChildQuestion updateValue={this.updateArray} question={this.state.childQuestion} number={i} />)
        }
        
        return(
            <form id = "Form" className = {css(styles.input)}  onSubmit = {this.handleSubmit}>
                {this.state.prompts.map(p => 
                    <Question updateValue={this.updateValue} question={p}/>
                )}
                <div key={this.state.values.numOfChildren}>
                    {childrenQuestion}
                </div>
                
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
        this.calculateSPANEligbility();
        this.calculateTEFAPEligbility();
        this.calculateChildrenFoodEligbility();
        this.calculateWICEligbility();
    }

    calculateEligibilityOnIncome = (program, twoLevels) => {
        const income = this.state.values.income + this.state.values.govBenefits;
        let povertyLevel;
        if(this.state.values.householdSize > 8) {
            povertyLevel = this.state.federalPovertyAmt[this.state.values.householdSize] + (this.state.values.householdSize - 8) * this.federalPovertyAmt.more;
        } else {
            povertyLevel = this.state.federalPovertyAmt[this.state.values.householdSize]
        }

        if(twoLevels) {
            const freePercentagePovertyLevel = this.state.aidPrograms[program].free * povertyLevel;
            const reducedPercentagePovertyLevel = this.state.aidPrograms[program].reduced * povertyLevel;
            if(income < freePercentagePovertyLevel) {
                return 'free';
            } else if (income < reducedPercentagePovertyLevel) {
                return 'reduced';
            }

            return;
        } else {
            const percentagePovertyLevel = this.state.aidPrograms[program] * povertyLevel;
            if(income < percentagePovertyLevel) {
                return true;
            } else {
                return false;
            }
        }
        
    }

    calculateEligibilityOnAge = (lowerBound, upperBound) => {
        if(lowerBound < this.state.age < upperBound) {
            return true;
        } else {
            return false;
        }
    }

    calculateSPANEligbility = () => {
        const SPAN = this.state.isEligible.SPAN;
        if(this.calculateEligibilityOnIncome('SPAN', false)) {
            SPAN.eligibility = true;
            SPAN.benefitAmt = 100000000;
        }

        this.setState({SPAN});
    }

    calculateTEFAPEligbility = () => {
        const TEFAP = this.state.isEligible.TEFAP;
        if(this.calculateEligibilityOnIncome('TEFAP', false)) {
            TEFAP.eligibility = true;
            TEFAP.benefitAmt = 100000000;
        }

        this.setState({TEFAP});
    }

    calculateChildrenFoodEligbility = () => {
        const childrenFood = this.state.isEligible.childrenFood;
        if(this.state.childAge === 'yes') {
            const result = this.calculateEligibilityOnIncome('childrenFood', true);
            if(result) {
                childrenFood.eligibility = true;
                childrenFood.freeOrReduced = result;
            } else {
                childrenFood.eligibility = false;
            }
        }

        this.setState({childrenFood});
    }

    calculateWICEligbility = () => {
        const WIC = this.state.isEligible.WIC;
        if(this.calculateEligibilityOnAge(60, 10000000)) {
            WIC.eligibility = true;
        }

        this.setState({WIC});
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