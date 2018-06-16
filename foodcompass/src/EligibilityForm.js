import React, {Component} from 'react';
import {StyleSheet, css} from '../node_modules/aphrodite';
import Question from './Question';
import ChildQuestion from './ChildQuestion';
import './App.css';
import Benefits from './Benefits';
import Eligible from './Eligible';
import Ineligible from './Ineligible';
import FoodEligible from './FoodEligible';

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
                name: 'Supplemental Nutrition Assistance Program',
                descrip: 'SNAP provides timely, targeted, and temporary benefits to low-income Americans to buy groceries.',
                link: 'https://www.fssabenefits.in.gov/CitizenPortal/application.do',
                eligibility: false,
                reason: [], 
                displayElement: null, 
            },

            TEFAP: {
                name: 'The Emergency Food Assistance Program',
                descrip: 'TEFAP provides USDA commodities to families in need of short-term hunger relief through emergency food providers like food banks.',
                link: 'https://www.in.gov/isdh/files/TEFAP%20Web%20Update%2006062018.pdf',
                eligibility: false,
                reason: [],  
                displayElement: null, 
            },

            CSFP: {
                name: 'The Commodity Supplemental Food Program',
                descrip: 'Provides food assistance for low-income seniors with a monthly package of healthy USDA commodities.',
                link: 'https://www.in.gov/isdh/files/CSFP%20Map%2002192018.pdf',
                eligibility: false,
                reason: [],  
                displayElement: null, 
            },

            childrenFood: {
                eligibility: false,
                freeOrReduced: 'free',
                displayElement: null, 
            },

            WIC: {
                name: 'Women, Infants, and Children',
                descrip: 'Provides nutritious foods and nutrition education for low-income, at risk women, infants.',
                link: 'https://www.in.gov/isdh/20424.htm',
                eligibility: false,
                reason: [],  
                displayElement: null, 
            },
        },

        num: 0,
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

    updatePregnancy = (key, value) => {
        const values = this.state.values;
        if(value.toLowerCase() === 'yes') {
            values.isPregnant = true;
        } else {
            values.isPregnant = false;
        }
        this.setState({values});
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
                (<Benefits num={this.state.num} data = {this.state.eligibility} />) :
                    null
                }


            </form>    

        );
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        this.runEligibilityCalcuation();
        this.setState({num: (this.state.num + 1)})
        this.setState({visible: false});
        this.setState({visible: true});
    } 

    runEligibilityCalcuation = () => {
        this.calculateSNAPEligbility();
        this.calculateTEFAPEligbility();
        this.calculateCSFPEligbility();
        this.calculateChildrenFoodEligbility();
        this.calculateWICEligbility();
    }

    calculateEligibilityOnIncome = (program, twoLevels) => {
        const income = parseInt(this.state.values.income, 10) + parseInt(this.state.values.govBenefits, 10);
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
            console.log(income);
            const percentagePovertyLevel = this.state.aidPrograms[program] * povertyLevel;
            console.log(percentagePovertyLevel);
            if(income < percentagePovertyLevel) {
                return true;
            } else {
                return false;
            }
        }
        
    }

    calculateSNAPEligbility = () => {
        const SNAP = this.state.eligibility.SNAP;
        if(this.calculateEligibilityOnIncome('SNAP', false)) {
            SNAP.eligibility = true;
            SNAP.displayElement = <Eligible program={SNAP.name} descrip={SNAP.descrip}
                                            link={SNAP.link}/>
        } else {
            SNAP.eligibility = false;
            SNAP.displayElement = <Ineligible program={SNAP.name} 
                                    reasons={[`The sum of your monthly income and government benefits is too high for`]}
                                    link={SNAP.link}/>
        }

        this.setState({SNAP});
    }

    calculateTEFAPEligbility = () => {
        const TEFAP = this.state.eligibility.TEFAP;
        if(this.calculateEligibilityOnIncome('TEFAP', false)) {
            TEFAP.eligibility = true;
            TEFAP.displayElement = <Eligible program={TEFAP.name} descrip={TEFAP.descrip}
                                            link={TEFAP.link}/>
        } else {
            TEFAP.eligibility = false;
            TEFAP.displayElement = <Ineligible program={TEFAP.name} 
                                    reasons={[`The sum of your monthly income and government benefits is too high`]}
                                    link={TEFAP.link}/>
        }

        this.setState({TEFAP});
    }

    calculateCSFPEligbility = () => {
        const CSFP = this.state.eligibility.CSFP;
        if(this.state.values.age >= 60 && this.calculateEligibilityOnIncome('CSFP', false)) {
            CSFP.eligibility = true;
            CSFP.displayElement = <Eligible program={CSFP.name} descrip={CSFP.descrip}
                                            link={CSFP.link}/>
        } else {
            const reasons = [];
            if(!(this.calculateEligibilityOnIncome('CSFP', false))) {
                reasons.push(`The sum of your monthly income and government benefits is too high`)
            }

            if(this.state.values.age < 60) {
                reasons.push(`You must be 60 years or older`)
            }
            CSFP.displayElement = <Ineligible program={CSFP.name} 
                                    reasons={reasons}
                                    link={CSFP.link}/>
        }

        this.setState({CSFP});
    }

    calculateChildrenFoodEligbility = () => {
        const childrenFood = this.state.eligibility.childrenFood;
        let childUnder18 = false;
        const reasons = [];
        let eligible = false;

        for(let i = 0; i < this.state.values.numOfChildren; i++) {
            if(this.state.values.childrenAge[i] <= 18) {
                childUnder18 = true;
            }
        }

        if(this.state.values.age <= 18 || childUnder18) {
            const result = this.calculateEligibilityOnIncome('childrenFood', true);
            if(result) {
                childrenFood.eligibility = true;
                eligible = true;
                childrenFood.freeOrReduced = result;
            } else {
                reasons.push('The sum of your monthly income and government benefits is too high')
                childrenFood.eligibility = false;
            }
        } else {
            reasons.push('You must be under 18 or have a child who is under 18')
        }

        childrenFood.displayElement = <FoodEligible successus={eligible} reasons={reasons}/>

        this.setState({childrenFood});
    }

    calculateWICEligbility = () => {
        const WIC = this.state.eligibility.WIC;
        let childUnder5 = false;
        const reasons = [];

        for(let i = 0; i < this.state.values.numOfChildren; i++) {
            if(this.state.values.childrenAge[i] <= 5) {
                childUnder5 = true;
            }
        }
        if(this.state.values.gender.toLowerCase() === 'female') {
            if((this.state.values.isPregnant || childUnder5) && this.calculateEligibilityOnIncome('WIC', false)) {
                WIC.eligibility = true;
                WIC.displayElement = <Eligible program={WIC.name} descrip={WIC.descrip}
                                                link={WIC.link}/>
            } else {
                if(!(this.state.values.isPregnant || childUnder5)) {
                    reasons.push(`You must be pregnant or have a child younger than 5 years old for`);
                }

                if(!(this.calculateEligibilityOnIncome('WIC', false))) {
                    reasons.push(`The sum of your monthly income and government benefits is too high for`);
                }
                
                WIC.displayElement = <Ineligible program={WIC.name} 
                                        reasons={reasons}
                                        link={WIC.link}/>
            }
        } else {
            reasons.push(`You must be female`)
            WIC.displayElement = <Ineligible program={WIC.name} 
                                        reasons={reasons}
                                        link={WIC.link}/>
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