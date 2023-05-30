import React, { Component } from "react";

class Prop extends Component{
    render(){
        return(
            <div>
                <p>name is {this.props.name} and age is {this.props.age}</p>
            </div>
        )
    }
}
export default Prop