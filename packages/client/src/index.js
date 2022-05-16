import React from "react";
import ReactDOM from "react-dom";
import WebFont from "webfontloader";
import "animate.css";
import App from "./App";

WebFont.load({
    google: {
        families: ["Jost:100,200,300,400,500,600,700,800,900,1000", "sans-serif"],
    },
});

ReactDOM.render(<App/>, document.getElementById("root"));
