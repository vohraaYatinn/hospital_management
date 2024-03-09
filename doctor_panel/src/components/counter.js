import React,{useState} from "react";

export default function Counter(){
    let [count, setCount] = useState(0);

    let increment = () =>{
        setCount(count + 1)
    }
    let decrement = () =>{
        if(count>0){
            setCount(count - 1)
        }
    }
    return(
        <div className="qty-icons">
            <button className="btn btn-pills btn-icon btn-primary minus" onClick={()=>decrement()}>-</button>
            <input min="0" name="quantity" value={count} type="number" className="btn btn-pills btn-icon btn-primary qty-btn quantity" readOnly/>
            <button className="btn btn-pills btn-icon btn-primary plus" onClick={()=>increment()}>+</button>
        </div>
    )
}