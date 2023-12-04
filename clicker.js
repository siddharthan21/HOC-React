import React,{ Component} from "react";
import Updatedcom from "./WithCounter";
class Clicker extends Component{
    render(){
        const {count,handle} = this.props;
        return (
            <>
                <button onClick={()=>{handle("+")}}>CLICK! {count}</button>
                <button onClick={()=>{handle("-")}}>CLICK! {count}</button>
            </>
        );
    }
}
export default Updatedcom(Clicker);