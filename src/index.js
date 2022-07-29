import React from 'react';
import { useState } from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom/client';
import './index.css';

const MyColor=()=>{


  const[color,setColor]=useState("");

  return (<>
  <p>my favorite color is {color}</p>

  <button type="button" onClick={()=>{setColor("blue")}}>Blue</button> <br/><br/>
  <button type="button" onClick={()=>{setColor("red")}}>Red</button><br/><br/>
  <button type="button" onClick={()=>{setColor("orange")}} >Orange</button><br/><br/>
  <button type="button" onClick={()=>{setColor("yellow")}} >Orange</button><br/><br/>
  <button type="button" onClick={()=>{setColor("gray")}} >grey</button><br/><br/>
  </>);


}


ReactDOM.createRoot(document.getElementById("root")).render(<MyColor/>)



