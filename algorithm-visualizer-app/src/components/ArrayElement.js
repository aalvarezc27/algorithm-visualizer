import * as React from "react";

export default function ArrayElement({value}){

    return(
        <div 
        className="array-element"
        style = {
            {
                height: `${value}%`,
                backgroundColor: 'hsl(200 100% 28%)',
                 width: '5%'
            }
        }
        >
      {value}

        </div>
    );
}