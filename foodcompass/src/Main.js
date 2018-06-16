import React, {Component} from 'react';
import './App.css';

import Option from './Option';
import EligibilityForm from './EligibilityForm';

import Benefits from './Benefits';

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
            <div id = "main">
                {this.state.clicked ?
                    <EligibilityForm updateValue={this.updateValue}/> :
                    <Option text = "Determine your Eligibility" loadForm = {this.loadForm}/>}
                    <Benefits data = {[true,true,false,true,false,false,false,true]} />
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

export default Main;