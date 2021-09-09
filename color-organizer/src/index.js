import React from "react";
import { render } from "react-dom";
import App from "./components/App.js"



// mount App component to DOM
render(<App colorData={colorJson} />, document.getElementById("root"));