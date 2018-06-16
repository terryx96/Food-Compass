import React, {Component} from 'react';
import {StyleSheet, css} from 'aphrodite';

class Terms extends Component {
    state = {
        terms: [
            {name: 'SNAP', fullName: "Supplemental Nutrition Assistance Program", desc: "Provides timely, targeted, and temporary benefits to low-income Americans to buy groceries."},
            {name: "TEFAP", fullName: "The Emergency Food Assistance Program", desc: "Provides USDA commodities to families in need of short-term hunger relief through emergency food providers like food banks."},
            {name: "CSFP", fullName: "The Commodity Supplemental Food Program", desc: "Provides food assistance for low-income seniors with a monthly package of healthy USDA commodities."},
            {name: "CACFP", fullName: "The Child and Adult Care Food Program	", desc: "Provides nutritious meals and snacks to children and adults in designated child and adult care centers.	"},
            {name: "NSLP", fullName: "The National School Lunch Program	", desc: "Provides nutritionally balanced lunch to qualified children each school day.	"},
            {name: "SBP", fullName: "The School Breakfast Program	", desc: "Provides nutritionally balanced breakfast to qualified children each school day.	"},
            {name: "SFSP", fullName: "The Summer Food Service Program	", desc: "Provides free meals and snacks to low-income children during the summer months.	"},
            {name: "WIC", fullName: "Women, Infants, and Children	", desc: "Provides nutritious foods and nutrition education for low-income, at risk women, infants.	"},
        ],
    }

    render() {
        return(
            <div className = {css(styles.term)}>
                <ol>
                    {this.state.terms.map(t => 
                        <li><p className = {css(styles.title)}>{t.name}:</p> 
                            <p className = {css(styles.fullName)}>{t.fullName} </p> 
                            <p className = {css(styles.dexc)}>{t.desc}</p>
                        </li>
                        )}
                </ol>   
            </div>
        );
    }
}

const styles = StyleSheet.create({
    term: {
        backgroundColor: "rgba(255,255,255,0.8)",
        borderRadius: '40px',
        padding: '15px',
        border: '1px solid gray',
        boxShadow: "25px 5px 50px rgba(0,0,0,.4)",

    },
    title:{
        textDecoration: 'bold',
        fontSize: '30px',
        padding: '1px',
        margin: '1px',
    },
    fullName:{
        color: 'rgba(150,150,150,1)',
        fontSize: '25px',
    },
    desc: {
        color: 'rgb(200,200,200)',
        fontSize: '20px',
    }

})

export default Terms;
