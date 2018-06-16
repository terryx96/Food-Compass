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
        return(
            <div>
                <div className = "eligible"> <p id = "recieved" className = {css(styles.big)}>ELIGIBLE FOR</p>
                <ol>
                    {this.state.yes.map(y => <li>{y}</li>)}
                </ol>
                </div>

                <div className = "ineligible"> <p id = "recieved"className = {css(styles.big)}>NOT ELIGIBLE FOR</p>
                <ol>
                    {this.state.no.map(n => <li>{n}</li>)}
                </ol>
                </div>
                <button onClick = {this.determineEligibility}>Submit</button>
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