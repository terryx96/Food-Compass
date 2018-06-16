import React, {Component} from 'react';

import Option from './Option';
import EligibilityForm from './EligibilityForm';

import Benefits from './Benefits';

class Main extends Component {
    state = {
        clicked: false,
        data: [],
    }

    render(){
        return(
            <div>
                {this.state.clicked ?
                    <EligibilityForm /> :
                    <Option text = "Determine your Eligibility" loadForm = {this.loadForm}/>}
                    <Benefits data = {[true,true,false,true,false,false,false,true]} />
            </div>
            
        );
    }

    loadForm = () => {
        this.setState({clicked: true});
    }


}

export default Main;