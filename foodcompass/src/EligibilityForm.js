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
            {id : 0, text: "Gender (Male or Female)", value: 'gender', type: 1},
            {id : 1, text: "Average Monthly Income", value: 'income', type: 0},
            {id : 2, text: "Age", value: 'age', type: 0},
            {id : 3, text: "Household Size: (i.e number of people)", value: 'householdSize', type: 0},
            {id : 4, text: "Other Government Benefits", value: 'govBenefits', type: 0},
            {id : 5, text: "How many children do you have? (if any)", value: 'numOfChildren', type: 1},   
        ],

        childQuestion: {id : 6, text: "Age of child", value: 'childrenAge', type: 0},
        pregnantQuestion: {id : 7, text: "Are you currently pregnant?", value: 'isPregnant', type: 1},


        values: {
            gender: '',
            isPregnant: false,
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
            9: 360,
        },

        eligibility: {
            SNAP: {
                name: 'SNAP',
                eligibility: false,
                reason: [],  
            },

            TEFAP: {
                name: 'TEFAP',
                eligibility: false,
                reason: [],  
            },

            CSFP: {
                name: 'CSFP',
                eligibility: false,
                benefitAmt: 0,
                reason: [],  
            },

            childrenFood: {
                name: 'childrenFood',
                eligibility: false,
                freeOrReduced: 'free',
                reason: [],
            },

            WIC: {
                name: 'WIC',
                eligibility: false,
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

    updatePregnancy = () => {
        let isPregnant = this.state.values.isPregnant;
        isPregnant = !isPregnant;
        this.setState({isPregnant});
    }
 
    render(){
        const childrenQuestion = [];
        for(let i = 0; i < this.state.values.numOfChildren; i++) {
            childrenQuestion.push(<ChildQuestion updateValue={this.updateArray} question={this.state.childQuestion} number={i} />)
        }

        let pregnantQuestion;
        if(this.state.values.gender.toLowerCase() === 'female') {
            pregnantQuestion = <Question updateValue={this.updatePregnancy} question={this.state.pregnantQuestion}/>
        } 
        
        
        return(
            <form id = "Form" className = {css(styles.input)}  onSubmit = {this.handleSubmit}>
                {this.state.prompts.map(p => 
                    <Question updateValue={this.updateValue} question={p}/>
                )}
                <div key={this.state.values.numOfChildren}>
                    {childrenQuestion}
                </div>
                <div key={this.state.values.gender}>
                    {pregnantQuestion}
                </div>
                
                
                <button type = "submit">Submit</button>
                
                {this.state.visible ?
                (<Benefits data = {this.state.eligibility} />) :
                    null
                }


            </form>    

        );
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        this.runEligibilityCalcuation();
        this.setState({visible: true});
    } 

    runEligibilityCalcuation = () => {
        this.calculateSPANEligbility();
        this.calculateTEFAPEligbility();
        this.calculateCSFPEligbility();
        this.calculateChildrenFoodEligbility();
        this.calculateWICEligbility();
    }

    calculateEligibilityOnIncome = (program, twoLevels) => {
        const income = this.state.values.income + this.state.values.govBenefits;
        let povertyLevel;
        if(this.state.values.householdSize > 8) {
            povertyLevel = this.state.federalPovertyAmt[this.state.values.householdSize] + (this.state.values.householdSize - 8) * this.federalPovertyAmt[9];
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
            console.log(this.state.aidPrograms[program])
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
        const SNAP = this.state.eligibility.SNAP;
        if(this.calculateEligibilityOnIncome('SNAP', false)) {
            SNAP.eligibility = true;
        }

        this.setState({SNAP});
    }

    calculateTEFAPEligbility = () => {
        const TEFAP = this.state.eligibility.TEFAP;
        if(this.calculateEligibilityOnIncome('TEFAP', false)) {
            TEFAP.eligibility = true;
        }

        this.setState({TEFAP});
    }

    calculateCSFPEligbility = () => {
        const CSFP = this.state.eligibility.CSFP;
        if(this.state.values.age >= 60) {
            CSFP.eligibility = true;
        }

        this.setState({CSFP});
    }

    calculateChildrenFoodEligbility = () => {
        const childrenFood = this.state.eligibility.childrenFood;
        let childUnder18 = false;
        for(let i = 0; i < this.state.values.numOfChildren; i++) {
            if(this.state.values.childrenAge[i] <= 18) {
                childUnder18 = true;
            }
        }
        if(this.state.values.age <= 18 || childUnder18) {
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
        const WIC = this.state.eligibility.WIC;
        let childUnder5 = false;
        for(let i = 0; i < this.state.values.numOfChildren; i++) {
            if(this.state.values.childrenAge[i] <= 5) {
                childUnder5 = true;
            }
        }
        if((this.state.values.gender.toLowerCase() === 'female' && ( this.state.values.isPregnant || childUnder5)) && this.calculateEligibilityOnAge(60, 10000000)) {
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