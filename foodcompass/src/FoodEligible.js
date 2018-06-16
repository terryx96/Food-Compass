import { StyleSheet, css } from 'aphrodite';
import React from 'react';
import Eligible from './Eligible'
import Ineligible from './Ineligible'

class FoodEligible extends React.Component {
    state = {
        childrenFood: {
            CACFP: {
                name: 'The Child and Adult Care Food Program',
                descrip: 'Provides nutritious meals and snacks to children and adults in designated child and adult care centers.',
                link: 'https://www.doe.in.gov/sites/default/files/nutrition/child-and-adult-care-food-program.pdf',
            },
    
            NSLP: {
                name: 'The National School Lunch Program',
                descrip: 'Provides nutritionally balanced lunch to qualified children each school day.',
                link: 'https://www.doe.in.gov/sites/default/files/nutrition/national-school-lunch-program.pdf',
            },
    
            SBP: {
                name: 'The School Breakfast Program',
                descrip: 'Provides nutritionally balanced breakfast to qualified children each school day.',
                link: 'https://www.doe.in.gov/nutrition/summer-food-service-program',
            },
    
            SFSP: {
                name: 'The Summer Food Service Program',
                descrip: 'Provides free meals and snacks to low-income children during the summer months.',
                link: 'https://www.doe.in.gov/sites/default/files/nutrition/sfsp-list-website-6-5-18.pdf',
            },
        },
    }
    
    render() {
        if(this.props.successus) {
            return(
                <div className = {css(styles.input)} key = {this.props}>
                            {Object.keys(this.state.childrenFood).map(programName => <Eligible program={this.state.childrenFood[programName].name} 
                                                                                            descrip={this.state.childrenFood[programName].descrip}
                                                                                            link={this.state.childrenFood[programName].link}/>)}
                </div>
            )
        } else {
            return(
                <div className = {css(styles.input)} key = {this.props}>
                            {Object.keys(this.state.childrenFood).map(programName => <Ineligible program={this.state.childrenFood[programName].name} 
                                                                                            reasons={this.props.reasons}
                                                                                            link={this.state.childrenFood[programName].link} />)}
                </div>
            )
        }
    }
}


const styles = StyleSheet.create({
    

});

export default FoodEligible;