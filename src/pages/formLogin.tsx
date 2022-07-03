import React, {FC, useState} from "react";
import Input from "../components/Input";
import Button from "../components/Butttons/Button";
import AuthService from "../services/AuthService";
import {MovieService} from "../services/MovieService";

interface IUser {
    email: string,
    password: string
}

const FormLogin: FC = () => {
    const [enteredEmail, setEnteredEmail] = useState<string>('')
    const [enteredPassword, setEnteredPassword] = useState<string>('')
    const [movies, setMovies] = useState()
    const submitHandler = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault()
        await AuthService.login(enteredEmail, enteredPassword)
        await MovieService.getMovie().then(movies=>console.log(movies))
        setEnteredEmail('')
        setEnteredPassword('')
    }
    const emailHandler = (event: React.FormEvent<HTMLInputElement>): void => {
        setEnteredEmail(event.currentTarget.value)
    }
    const passwordHandler = (event: React.FormEvent<HTMLInputElement>): void => {
        setEnteredPassword(event.currentTarget.value)
    }
    return (<div>
        <form onSubmit={submitHandler}>
            <Input type={'text'} value={enteredEmail} change={emailHandler} placeholder={'Email'}></Input>
            <Input type={'text'} value={enteredPassword} change={passwordHandler}
                   placeholder={'Password'}></Input>
            <Button value={'Login'} type={"submit"}></Button>
        </form>
    </div>);
}

export default FormLogin;
