import React, { Component } from "react";
// import Prop from "./Prop";
import MessageList from "./components/MessageList"
// import Header from "./components/Header"

// function App(){
//   return(
//     <p>This is a First react app</p>
//   )
// }
class App extends Component{
  // state={
  //   subject:"React js",
  //   name:"Ravi",
  //   year:2019
  // }
  render(){
    return(
      <div>
        {/* <h1>This is a heading</h1>
        <p>This is a React app</p>
        <h3>{this.state.subject} <br />{this.state.name} <br />{this.state.year}</h3>
        <Prop name="Jaswanth" age="23"/>
        <Prop name="DJ" age="24"/> */}
        <MessageList />
        {/* <Header /> */}
      </div>
    )
  }
}
export default App