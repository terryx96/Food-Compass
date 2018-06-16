import React, {Component} from 'react';
import {StyleSheet, css} from 'aphrodite';
import './App.css';

class Benefits extends Component {
    
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
            <div key={this.props.num}>
                <div className = "eligible"> <p id = "recieved" className = {css(styles.big)}  key={this.props.num}>ELIGIBLE FOR</p>
                    <ul>
                        {Object.keys(eligibleBenefits).map(program => <li>{this.props.data[program].displayElement}</li>)}
                    </ul>
                </div>

                <div className = "ineligible"> <p id = "recieved"className = {css(styles.big)}  key={this.props.num}>NOT ELIGIBLE FOR</p>
                    <ul key={this.props.num}>
                        {Object.keys(ineligibleBenefits).map(program => <li>{this.props.data[program].displayElement}</li>)}
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
    },
    recieved:{
        
    }
})

export default Benefits;