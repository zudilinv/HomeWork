import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3"

type GreetingContainerPropsType = {
    users: UserType[]// need to fix any
    addUserCallback: (name: string)=>void // need to fix any
}

export const pureAddUser = (name: string, setError: (error: string)=> void,
                            setName: (name: string) =>void, addUserCallback: (name: string) => void) => {
    if (name === "") {
        setError("Ошибка! Введите имя!")
    }else {
        addUserCallback(name)
        setName("")
    }   // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
}
export const pureOnBlur = (name: string, setError: (error: string)=>void) => name === "" && setError("Ошибка! Введите имя!")
    // если имя пустое - показать ошибку
export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: ()=> void) => e.key === "Enter" && addUser()
     // если нажата кнопка Enter - добавить
const GreetingContainer: React.FC<GreetingContainerPropsType> =
    ({users, addUserCallback,}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>("") // need to fix any
    const [error, setError] = useState<string>("") // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        error && setError( "")
        setName(e.currentTarget.value) // need to fix
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }
    const onBlur = () => {
        pureOnBlur(name, setError)
    }
    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }
    const totalUsers = users.length
    const lastUserName = totalUsers !==0 ? users[totalUsers -1].name : name

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}
export default GreetingContainer
