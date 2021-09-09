import React from "react";
import { useInput } from "./hooks";


export default function AddColorForm({ onNewColor = f => f }) {
    // use custom useInput hook which accepts initial input value
    // and returns properties for input elements and reset function for input value
    const [titleProps, resetTitle] = useInput(""); 
    const [colorProps, resetColor] = useInput("#000000");
    
    // function to handle form submt event
    const submit = event => {
        event.preventDefault();
        onNewColor(titleProps.value, colorProps.value);  // submitted values passed to parent's onNewColor function which will update state in App component and cause full UI re-render
        resetTitle();
        resetColor();
    }

    // React element returned represents form UI
    return (
        <form onSubmit={submit}>
            <input
                {...titleProps}
                type="text"
                placeholder="color title"
                required
            />
            <input
                {...colorProps}
                type="color"
                required
            />
            <button>Add</button>
        </form>
    )
}