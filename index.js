import React from "./_snowpack/pkg/react.js";
import ReactDOM from "./_snowpack/pkg/react-dom.js";
console.log("Hello World");
const domContainer = document.querySelector("#root");
ReactDOM.render(/* @__PURE__ */ React.createElement("button", null, "Button"), domContainer);
