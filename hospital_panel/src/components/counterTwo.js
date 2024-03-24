import React, { useState } from "react";

export default function CounterTwo(){
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
    <div className="qty-icons ms-3">
        <button onClick={decrements} className="btn btn-icon btn-primary minus">-</button>
        <input min="0" name="quantity" value={count} readOnly type="number" className="btn btn-icon btn-primary qty-btn quantity"/>
        <button onClick={increments} className="btn btn-icon btn-primary plus">+</button>
    </div>
    )
}