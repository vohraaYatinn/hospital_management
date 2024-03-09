import React,{useState} from "react";

export default function CounterTwo(){
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
        <div className="qty-icons ms-3">
            <button onClick={()=>decrement()} className="btn btn-icon btn-primary minus">-</button>
            <input min="0" name="quantity" value={count} type="number" className="btn btn-icon btn-primary qty-btn quantity" readOnly/>
            <button onClick={()=>increment()} className="btn btn-icon btn-primary plus">+</button>
        </div>
    )
}