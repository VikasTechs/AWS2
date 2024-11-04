import React from "react";
function Student (props){
  return (
    <div>
      <h1>name:{props.name}</h1>
      <p>
        marks:{props.marks}
      </p>

    </div>
  )
}
function App(){
  return (
    <div>
      <Student name={"sanjay"} marks={85}/>
    </div>
  )
}
export default App;