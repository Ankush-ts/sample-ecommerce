import React, { Component } from "react";  //'{component}'--> this is default

//step -1 create a class
class CounterComponent extends Component {

    // Step -2: return JSX from render method 
    render(){
        return (
            <div> I am inside a class based component </div>
         
        )
    }
   
}
export default CounterComponent;

// step 3: add <CounterComponent/> in App.js as <App/> is used in index.js
// step 4: import CounterComponent in App.js