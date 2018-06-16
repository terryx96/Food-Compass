import React, {Component} from 'react';


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
                <div className = "eligible"> BENEFITS RECIEVED
                <ul>
                    {this.state.yes.map(y => <li>{y}</li>)}
                </ul>
                </div>

                <div className = "ineligible"> BENEFITS NOT RECIEVED
                <ul>
                    {this.state.no.map(n => <li>{n}</li>)}
                </ul>
                </div>
                <button onClick = {this.determineEligibility}>ddddd</button>
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
        this.setState({tempYes, tempNo});
        alert(tempNo);
    }

}

export default Benefits;