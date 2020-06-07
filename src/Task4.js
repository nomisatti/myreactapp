import React from 'react';
import './Task4.css'

function ApplyingCss({heading}) {
    return <div> 
    <div> <h1>{heading}</h1>
    <p> Click this button to Add Css</p>
    <button id='clickme' onClick={buttonClicked}>Click me</button>
    </div>
    </div>
      
      function buttonClicked(){
      document.getElementById("ordered").classList.add("ordered");
      document.getElementById("unordered").classList.add("unordered");
      var body = document.getElementsByTagName("body")
            body[0].classList.add("body");


      }
  }

  export default ApplyingCss;
