import { Component } from "react";
// import  files or compont or modules here
//helper js file use to config with any third party intergration with react app 
// like google , facebook , etc
export default class Helper extends Component{

    constructor(){
        super();
        this.state={
            yourStateVariable=false // false may be your state's value
        };
    }

    customFunction=()=>{
        // your custom logic goes here 
        // to change value of your state 
        this.state({yourStateVariable:true});
    }

    render(){
        return (
            <div>
                Your html code goes here 
            </div>
        )
    }
}