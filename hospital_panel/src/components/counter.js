import React, { useState } from "react";

export default function Counter(){
    let [count, setCount] = useState(0)
    let increments = ()=>{
        setCount(count + 1)
    }
    let decrements = ()=>{
        if(count > 0){
            setCount(count - 1)
        }
    }
    return(
    <div className="qty-icons">
        <button className="btn btn-pills btn-icon btn-primary minus" onClick={decrements}>-</button>
        <input min="0" name="quantity" value={count} readOnly type="number" className="btn btn-pills btn-icon btn-primary qty-btn quantity"/>
        <button className="btn btn-pills btn-icon btn-primary plus" onClick={increments}>+</button>
    </div>
    )
}