import React, { useState } from 'react';
import './App.css';
import Quote from './component/quote';

function App() {
  var backcolorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  
    ];
    var fontcolorArray = ['#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC'];
  let canvasColor;
  let fontAndBorderColor;
  let colorSchemas;
  const [initialColors, setColors] = useState({
    canvasColor:backcolorArray[Math.floor(1 + Math.random() * 9)],
    fontAndBorderColor:fontcolorArray[Math.floor(1 + Math.random() * 9)]+"!important"
});
   let getColors=()=>{
    
       colorSchemas={
          backgroundColor:backcolorArray[Math.floor(1 + Math.random() * 9)],
          color:fontcolorArray[Math.floor(1 + Math.random() * 9)]+"!important",
          borderr: fontcolorArray[Math.floor(1 + Math.random() * 9)]+"!important"
      }
   }
   getColors();
  return (
    <>
    <div className="full-page" style={{backgroundColor:initialColors.canvasColor, color:initialColors.fontAndBorderColor,border:"2px solid"+ initialColors.fontAndBorderColor}} >
        <div class="quote-box text-center">
            <Quote funct={setColors}></Quote>
        </div> 
     </div>
    
  </>
  );
}

export default App;
