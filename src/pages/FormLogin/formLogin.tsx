import React, {FC, useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux'
import Input from "../../components/Input";
import Button from "../../components/Butttons/Button";

// @ts-ignore
import {loginCreator, usersReducer} from '../../users/users.reducer'
import {useNavigate} from "react-router-dom";
import {deleteCookie} from "../../cookie";

const FormLogin: FC = () => {
    const [enteredEmail, setEnteredEmail] = useState<string>('')
    const [enteredPassword, setEnteredPassword] = useState<string>('')
    const dispatch = useDispatch()
    const nav = useNavigate();
    // @ts-ignore
    const isAuth = useSelector((state)=>state.usersReducer.isAuth)

    const submitHandler = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault()
        dispatch(loginCreator({enteredEmail,enteredPassword}))
        setEnteredEmail('')
        setEnteredPassword('')



    }
    useEffect(()=>{
        deleteCookie('accessToken')
        deleteCookie('refreshToken')
    },[])
    useEffect(() => {
        if (isAuth) {
            nav('/');
        }
    },[isAuth])

    const emailHandler = (event: React.FormEvent<HTMLInputElement>): void => {
        setEnteredEmail(event.currentTarget.value)
    }
    const passwordHandler = (event: React.FormEvent<HTMLInputElement>): void => {
        setEnteredPassword(event.currentTarget.value)
    }


    // @ts-ignore
    return (
            <form onSubmit={submitHandler}>
                <Input type={'text'} value={enteredEmail} change={emailHandler} placeholder={'Email'}></Input>
                <Input type={'text'} value={enteredPassword} change={passwordHandler}
                       placeholder={'Password'}></Input>
                <Button value={'Login'} type={"submit"}></Button>
            </form>

    );
}

export default FormLogin;
