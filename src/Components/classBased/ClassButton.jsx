import { Component } from "react";
class ClassButton extends Component {
render(){
    return(
        <div>
            <button className="border-2 p-2 bg-gray-300">{this.props.buttonName}</button>
        </div>
    )
}
}
export default ClassButton