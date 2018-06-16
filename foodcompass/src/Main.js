import React, {Component} from 'react';
import './App.css';

import Option from './Option';
import EligibilityForm from './EligibilityForm';

import Benefits from './Benefits';

import {StyleSheet, css} from 'aphrodite';

class Main extends Component {
    state = {
        clicked: false,
        values: {
            age: 0,
            income: 0,
            householdSize: 0,
            govBenefits: 0,
        },
    }

    render(){
        return(
            <div className = {css(styles.main)}>
                {this.state.clicked ?
                    <EligibilityForm updateValue={this.updateValue}/> :
                    <Option text = "Determine your Eligibility" loadForm = {this.loadForm}/>}

            </div>
            
        );
    }

    updateValue = (key, value) => {
        const values = this.state.values;
        values[key] = value;

        this.setState({values});
    }

    loadForm = () => {
        this.setState({clicked: true});
    }

}

const styles = StyleSheet.create({
    main: {
        alignSelf: 'center',
    }
})

export default Main;