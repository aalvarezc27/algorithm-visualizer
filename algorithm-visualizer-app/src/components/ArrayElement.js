import * as React from "react";
import { useState, useEffect } from "react";

export default function ArrayElement({value}){

    const [height, setHeight] = useState(0);
    useEffect(() => {
        setHeight(value);
    }, [value]);
    return(
        <div 
        className="array-element"
        style = {
            {
                height: `${value}%`,
                backgroundColor: 'hsl(200 100% 28%)',
                width: '5%',
                transition: 'height 1s ease'
            }
        }
        >
        </div>
    );
}