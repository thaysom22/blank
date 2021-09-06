import React, { useState, UseState } from "react"  // React is default export of "react" module
import Star from "./Star.js"  // naming of import from file with default export can be arbitrary 


const createArray = length => [...Array(length)];

export default function StarRating({ 
    style={}, 
    totalStars=5,
    selectedStars=0,
    onRate= f=>f,
    ...props 
}) {
    return (
        <div style={{ padding: "5px", ...style }} {...props}>
            {createArray(totalStars).map(
                (_value, index) => (
                    <Star 
                        key={index} 
                        selected={selectedStars>i}  // selected attribe for Star component is true if Star 0-index is less than value of selectedStars variable
                        onSelect={() => onRate(i+1)} // i+1 is the new rating value
                    />  
            ))};
            <p>
                {selectedStars} of {totalStars} stars
            </p>
        </div>
    );
}