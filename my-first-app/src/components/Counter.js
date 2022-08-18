import React from "react";
import {BiTrash} from "react-icons/bi";
import {FaAmazon } from"react-icons/fa";
const Counter = () =>{
const name = "toyyib";
const age = 26;
let text = "";

let bot = "HELLO"



    return (
    <div>
        <h1 className="--flex-center">{name} <BiTrash color="red" size={22}/></h1>
        <p className="--flex-center">i am {age} years old <BiTrash color="red"/></p>
        <h1 className="--flex-center">{Math.random() * 10 + 1 - 2} <FaAmazon color="red" size={22}/></h1>
       <div className="--flex-center">
        <input  type="text" value = {text} onChange={() => {
            alert("changed");
        }} />
        </div>
    </div>
    );
  }

  export default Counter;

