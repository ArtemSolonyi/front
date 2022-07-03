"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function Button(props) {
    return ((0, jsx_runtime_1.jsx)("button", Object.assign({ type: props.type, onClick: props.onclick, className: props.className }, { children: props.value })));
}
exports.default = Button;
