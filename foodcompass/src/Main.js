import React, {Component} from 'react';
import './App.css';

import Option from './Option';
import EligibilityForm from './EligibilityForm';
import Map from './Map';

import Benefits from './Benefits';
import AboutUs from './AboutUs';
import Terms from './Terms';
import {StyleSheet, css} from 'aphrodite';
import Homepage from './Homepage';

class Main extends Component {
    state = {
        clicked: false,
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
            case "2": return <EligibilityForm updateValue = {this.updateValue}/>; break;
            case "3": return <Map />; break;
            case "4": return <Terms />; break;
            default: break;
            // <Option text = " your Eligibility" loadForm = {this.loadForm}/>
        }
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