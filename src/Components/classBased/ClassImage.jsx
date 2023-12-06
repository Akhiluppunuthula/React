import { Component } from "react";
class ClassImage extends Component {
    render(){
        return(
            <div>
                <img src={this.props.imageUrl} alt="image" className="w-full h-[200px]" />
            </div>
        )
    }

}
export default ClassImage