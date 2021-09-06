import React from "react";
import Color from "./Color.js";


// json from color-data.json is passed to ColorList component as props via parent App component
export default function ColorList({ 
    colors=[], 
    onRemoveColor= f=>f,
    onRateColor= f=>f
}) {
    if (!colors.length) return <div>No Colors Listed.</div>;
    return (
        <div>
            {colors.map(color => 
                <Color 
                    key={color.id} 
                    {...color} 
                    onRemove={onRemoveColor}
                    onRate={onRateColor}    
                />
            )}
        </div>
    );
}