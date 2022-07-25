import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom/client';
import './index.css';

function MyAddress(props){
  return <li>I am {props.name}</li>
}


function TrueMe(){

const me=["Patsicko","PatsiTech","CEO"];

return <>
<ul>
  
{me.map(item=><MyAddress name={item} />)}
</ul>
</>

}


ReactDOM.createRoot(document.getElementById("root")).render(<TrueMe/>)



