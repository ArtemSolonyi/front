"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function Input(props) {
    return ((0, jsx_runtime_1.jsx)("input", { className: props.className, value: props.value, onChange: props.change, type: props, placeholder: props.placeholder }));
}
exports.default = Input;
