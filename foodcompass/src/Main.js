import React, {Component} from 'react';
import './App.css';

import Option from './Option';
import EligibilityForm from './EligibilityForm';
import Map from './Map';

import Benefits from './Benefits';
import AboutUs from './AboutUs';

import {StyleSheet, css} from 'aphrodite';
import Homepage from './Homepage';

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
                {this.selectPage()}
            </div>
            
        );
    } 

    selectPage = () => {
        switch(this.props.page){
            case "0": return <Homepage />; break;
            case "1": return <AboutUs />; break;
            case "2": return <EligibilityForm  updateValue = {this.updateValue}/>; break;
            case "3": return <Map />; break;
            default: break;
            // <Option text = " your Eligibility" loadForm = {this.loadForm}/>
        }
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
        display: 'block',
        width: '50%',
        marginLeft: 'auto',
        marginRight: 'auto',

    }
})

export default Main;