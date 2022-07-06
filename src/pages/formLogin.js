"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const Input_1 = __importDefault(require("../components/Input"));
const Button_1 = __importDefault(require("../components/Butttons/Button"));
// @ts-ignore
const users_reducer_1 = require("../users/users.reducer");
const FormLogin = () => {
    const [enteredEmail, setEnteredEmail] = (0, react_1.useState)('');
    const [enteredPassword, setEnteredPassword] = (0, react_1.useState)('');
    const dispatch = (0, react_redux_1.useDispatch)();
    const submitHandler = (event) => __awaiter(void 0, void 0, void 0, function* () {
        event.preventDefault();
        dispatch((0, users_reducer_1.loginCreator)({ enteredEmail, enteredPassword }));
        setEnteredEmail('');
        setEnteredPassword('');
    });
    const emailHandler = (event) => {
        setEnteredEmail(event.currentTarget.value);
    };
    const passwordHandler = (event) => {
        setEnteredPassword(event.currentTarget.value);
    };
    return ((0, jsx_runtime_1.jsxs)("form", Object.assign({ onSubmit: submitHandler }, { children: [(0, jsx_runtime_1.jsx)(Input_1.default, { type: 'text', value: enteredEmail, change: emailHandler, placeholder: 'Email' }), (0, jsx_runtime_1.jsx)(Input_1.default, { type: 'text', value: enteredPassword, change: passwordHandler, placeholder: 'Password' }), (0, jsx_runtime_1.jsx)(Button_1.default, { value: 'Login', type: "submit" })] })));
};
exports.default = FormLogin;
