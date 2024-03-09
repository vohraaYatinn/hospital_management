import React, { useState } from "react";

import { accordionData } from "../../data/data";

export default function AccordionOne(){
    const[activeIndex, setActiveIndex] = useState(1)

    return(
        <div className="accordion">
            {accordionData.map((item, index) =>{
                return(
                    <div className="accordion-item border rounded mt-2" key={index}>
                        <h2 className="accordion-header">
                            <button className={`${activeIndex === item.id ? '' : 'collapsed'} accordion-button border-0 bg-light`} type="button" onClick={() => setActiveIndex(item.id)}>
                                {item.title}
                            </button>
                        </h2>
                        <div className={`${activeIndex === item.id ? 'show' : ''} accordion-collapse border-0 collapse`}>
                            <div className="accordion-body text-muted">
                                {item.desc}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}