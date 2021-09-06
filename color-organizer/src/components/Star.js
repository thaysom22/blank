import React from "react";
import { FaStar } from "react-icons/fa";


// Star component receives props from StarRating parent component
export default function Star({ selected=false, onSelect= f => f }) {
    return <FaStar color={selected ? "gold" : "gray"} onClick={onSelect} />
}