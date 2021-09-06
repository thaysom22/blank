import React from "react";
import { FaTrash } from "react-icons/fa";
import StarRating from "./StarRating";


// Color component receives props from ColorList parent component
export default function Color({
    id,
    title, 
    color, 
    rating, 
    onRemove= f=>f,
    onRate= f=>f
 }) {
    return (
        <section>
            <h1>{title}</h1>
            <button onClick={()=>onRemove(id)}>
                <FaTrash />
            </button>
            <div style={{ height: "50px", backgroundColor: color }} />
            <StarRating 
                selectedStars={rating}
                onRate={rating => onRate(id, rating)} 
            />
        </section>
    );
}