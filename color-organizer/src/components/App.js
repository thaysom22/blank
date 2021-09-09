import React, { useState } from "react";
import ColorList from "./ColorList.js";
import colorData from "../data/color-data.json";  // colorData is local (this module) binding assigned to object within .json file
import AddColorForm from "./AddColorForm.js";
import { v4 as uuidv4 } from 'uuid';


// state for entire app's component tree is stored in this single root component 
export default function App() {
    const [colors, setColors] = useState(colorData);
    return (
        <>
            <AddColorForm
                //  onNewColor function property is invoked by submit handler when a new color is added by submitting the form
                onNewColor={(title, color) => {
                    const newColors = [
                        ...colors,
                        // new color added
                        {
                            id: uuidv4(),
                            rating: 0,
                            title,
                            color,
                        }
                    ];
                    setColors(newColors);  // update of state variable invokes App function and re-renders UI
                }}
            />
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
        </>
    );
}