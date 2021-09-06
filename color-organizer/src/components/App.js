import React, { useState } from "react";
import colorData from "../data/color-data.json";  // colorData is local (this module) binding assigned to object within .json file
import ColorList from "./ColorList.js";


// state for entire app's component tree is stored in this single root component 
export default function App() {
    const [colors, setColors] = useState(colorData);
    return (
        <ColorList 
            colors={colors} 
            onRemoveColor={id => {
                const newColors = colors.filter(color => color.id !== id);
                setColors(newColors);  // update of state variable invokes App function and re-renders UI
            }}
            onRateColor={(id, rating) => {
                const newColors = colors.map(color =>
                    color.id === id ? { ...color, rating } : color  // overwrite rating value for updated color only
                );
                setColors(newColors);  // update of state variable invokes App function and re-renders UI
            }}
        />
    );
}