import React, {Component} from 'react';

import Option from './Option';
import EligibilityForm from './EligibilityForm';

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
            </div>
            
        );
    }

    loadForm = () => {
        this.setState({clicked: true});
    }


}

export default Main;