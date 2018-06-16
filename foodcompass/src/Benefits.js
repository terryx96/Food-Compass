import React, {Component} from 'react';
import {StyleSheet, css} from 'aphrodite';
import './App.css';

class Benefits extends Component {
    state = {
        options: [
            "Women Infant Children (WIC)",
            "Summer Food Service Program (SFSP)",
            "School Breakfast Program (SBP)",
            "National School Lunch Program (NSLP)",
            "Child and Adult Care Food Program (CACFP)",
            "Commodity Supplemental Food Program (CSFP)",
            "The Emergency Food Assistance Program (TEFAP)",
            "Supplemental Nutrient Assistance Program (SNAP)",
        ],
        yes: [],
        no: [],

 
    }

    render(){
        const eligibleBenefits = {};
        const ineligibleBenefits = {};
        Object.keys(this.props.data).forEach(program => {
            if(this.props.data[program].eligibility) {
                eligibleBenefits[program] = this.props.data[program];
            } else {
                ineligibleBenefits[program] = this.props.data[program];
            }
        });
        
        return(
            <div>
                <div className = "eligible"> <p id = "recieved" className = {css(styles.big)}>ELIGIBLE FOR</p>
                    <ul>
                        {Object.keys(eligibleBenefits).map(program => <li>{program}</li>)}
                    </ul>
                </div>

                <div className = "ineligible"> <p id = "recieved"className = {css(styles.big)}>NOT ELIGIBLE FOR</p>
                    <ul>
                        {Object.keys(ineligibleBenefits).map(program => <li>{program}</li>)}
                    </ul>
                </div>
            </div>
        )
    }

    determineEligibility = () => {
        let tempYes = [];
        let tempNo = [];
        for(let i = 0; i < this.props.data.length; i++){
            if(this.props.data[i]){
                tempYes.push(this.state.options[i]);
            }
            else{
                tempNo.push(this.state.options[i]);
            }
        }
        this.setState({yes: tempYes, no: tempNo});
    }

}

const styles = StyleSheet.create({
    big: {
        color: 'white',
        fontSize: '50px',
    }
})

export default Benefits;