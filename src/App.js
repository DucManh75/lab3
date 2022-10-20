import * as React from 'react'
import "./style.css"

export default function App() {

  const ClickButton = () => {
    alert("Alert!!!")
    }

 return (
      <button onClick={ClickButton}></button>
 );
}	
