import React from 'react';

function Lists({heading}) {
    return <div> 
        <h1>{heading}</h1>
          <h2>My Courses</h2>
            <ol id='unordered'>
                <li >BlockChain (Q2)</li>
                <li >Bootcamp 2020</li>
            
            </ol>

            <h2>My Expertise</h2>
            <ul id='ordered'>
                <li>HTHML/CSS/Bootstrap</li>
                <li>JavaScript/JQuery/Ajax</li>
                <li>Asp.Net (C#)</li>
                <li>WordPress</li>
            </ul>
      </div>
  }

  export default Lists;
