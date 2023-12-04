import React, { Component } from "react";
const Updatedcom = (Original) =>{
    class Newcomp extends React.Component{
        constructor(props){
            super(props)
            this.state={
                count:0
            }
        }
        handle = (sum)=>{
            this.setState(prevState =>{
                console.log(sum);
                if(sum == "+" || sum.type == "mouseover"){
                    return {count : prevState.count+1}
                }else{
                    return {count : prevState.count-1}
                }
            })
        }
        render(){
            return <Original name="siss" count={this.state.count} handle={this.handle}/>
        }
    }
    return Newcomp;
}
export default Updatedcom;