import React from "react";
import { render } from "react-dom";
import App from "./components/App.js"
import colorJson from "./data/color-data.json";  // colorData is local (this module) binding assigned to object within .json file


// mount App component to DOM
render(<App colorData={colorJson} />, document.getElementById("root"));