import { Component } from "react";
// import  files or compont or modules here


// use to set up costom configuration in react project
// folder ./config/
// you also sets up any environment setups in configuration folder 

class Sample extends Component{

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