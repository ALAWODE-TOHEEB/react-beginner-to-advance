import React, { useState } from "react";


const HelloWorld = () => {
  const [count, setCount] = useState(0);

const handleSubtract = () =>{
  setCount(count - 1);
}
const handleReset = () =>{
  setCount(0);
}
const handleAdd = () =>{
  setCount(count + 1);
}

let paint = "#444";

if (count >= 1){
  paint = "blue";
} else if(count < 0){
  paint = "red";
} else {
  paint = "#444";
}

  return (
    <section className="--flex-center --100vh --bg-primary">
      <div className="container --bg-light --p2 --m2 --center-all">
        <h3>React counter</h3>
        <h1 style={{color : paint}}>{count}</h1>
        <div
        className="buttons --flex-center">
          <button className="subtract --btn --btn-danger" onClick={handleSubtract}>Subtract</button>
          <button className="reset --btn " onClick={handleReset}>Reset</button>
          <button className=" --btn --btn-primary" onClick={handleAdd}>Add</button>
        </div>
      </div>
    </section>
  )
}

export default HelloWorld;