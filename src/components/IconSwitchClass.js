import React from "react";


export class IconSwitch extends React.Component {

    render(){
        return (
            <div>
            <span class="material-icons" onClick={this.props.onSwitch}>{this.props.icon}</span>
        </div>
        )
    }
}