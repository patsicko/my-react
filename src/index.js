import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom/client';
import './index.css';


class MyAdress extends React.Component{

constructor(props){

super();

this.state={

fname:"MANIBAHO",
lname:"Patrick",
nname:"patsicko",
location:"Musanze",
company:"PatsiTech",
position:"CEO",



}

}
render(){
 return( <p>
  My name is {this.state.fname} {this.state.lname}. <br/> On different platforms I am known by {this.state.nname} as my nickname. <br/>
   I live in {this.state.location},<br/> I am a {this.state.company} {this.state.position}.<br/>
   if you wish to know more about me and my work,  <br/> you can visit my github page on <a href="https://github.com/patsicko">https://github.com/patsicko</a>

   thank you {this.props.level}
</p>)
}

}


ReactDOM.createRoot(document.getElementById("root")).render(<MyAdress level="Very much!!"/>)