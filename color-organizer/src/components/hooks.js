import { useState } from "react";  // do not require React as no JSX syntax used 


export const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);  // use value passed to hook as arg to set state
    return [
        { value, onChange: e => setValue(e.target.value) },  // AddColorForm component will re-render whenever input emits onChange event
        () => setValue(initialValue)
    ];
};