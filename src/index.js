import React from 'react';
import { useState } from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import Change from './Change';

const MyColor=()=>{


  const[color,setColor]=useState("");

  const[name,setName]=useState("Patsicko");
  const[company,setCompany]=useState("PatsiTech");
  const[position,setPosition]=useState("CEO");

  const[address,setAdress]=useState({
    name:"Patrick",
    age:15,
    position:"CEO"
  })


   const changePosition=()=>{
    setAdress(previousState=>{return{...previousState,position:"DG"}})

 
   }

// const changeAge=()=>{
//   setAdress(prev=>{
//    return{prev,age:20}
//   })
// }




  return (<>
 <Change/>

  My name is {name} <br/> I work in {company} and I am a {company} {position}<br/>

   I am {address.name} {address.age} years old and I am  a {address.position}<br/>
  my favorite color is {color}<br/>
  <button type="button" onClick={changePosition} >change position</button><br/><br/>


  <button type="button" onClick={()=>{setColor("blue")}}>Blue</button> <br/><br/>
  <button type="button" onClick={()=>{setColor("red")}}>Red</button><br/><br/>
  <button type="button" onClick={()=>{setColor("orange")}} >Orange</button><br/><br/>
  <button type="button" onClick={()=>{setColor("yellow")}} >Orange</button><br/><br/>
  <button type="button" onClick={()=>{setColor("gray")}} >grey</button><br/><br/>

 
  
  </>);
 

}

ReactDOM.createRoot(document.getElementById("root")).render(<MyColor/>)



