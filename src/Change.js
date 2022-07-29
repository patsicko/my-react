import React from "react";
import { useState } from "react";
import { ReactDOM } from 'react-dom/client';

const Change=()=>{

const[text,setText]=useState("your text");



    return(
        <div className="textarea" >


   
         
<input className="text" type="text"  placeholder="type the text here"  onChange={e=>setText(e.target.value.length)} /> <br/>
<br/>
   Number of leters: {text}

        </div>
    );
}



export default Change;

