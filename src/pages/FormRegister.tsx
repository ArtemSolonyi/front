import React, {FC, useState} from "react";
import Input from "../components/Input";
import Button from "../components/Butttons/Button";
import AuthService from "../services/AuthService";


const FormRegister: FC = () => {
    const [enteredUsername, setEnteredUsername] = useState<string>('')
    const [enteredEmail, setEnteredEmail] = useState<string>('')
    const [enteredPassword, setEnteredPassword] = useState<string>('')

    const submitHandler = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault()
        await AuthService.registration(enteredEmail, enteredUsername, enteredPassword)
        setEnteredUsername('')
        setEnteredEmail('')
        setEnteredPassword('')
    }
    const emailHandler = (event: React.FormEvent<HTMLInputElement>): void => {
        setEnteredEmail(event.currentTarget.value)
    }

    const usernameHandler = (event: React.FormEvent<HTMLInputElement>): void => {
        setEnteredUsername(event.currentTarget.value)
    }

    const passwordHandler = (event: React.FormEvent<HTMLInputElement>): void => {
        setEnteredPassword(event.currentTarget.value)
    }

    return (<div>
            <form onSubmit={submitHandler}>
                <Input type={'text'} value={enteredUsername} change={usernameHandler}
                       placeholder={'Username'}></Input>
                <Input type={'text'} value={enteredEmail} change={emailHandler} placeholder={'Email'}></Input>
                <Input type={'text'} value={enteredPassword} change={passwordHandler}
                       placeholder={'Password'}></Input>
                <Button value={'Registration'} type={"submit"}></Button>
            </form>
        </div>
    );
}

export default FormRegister;