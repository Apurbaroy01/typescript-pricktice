import React from 'react'

type UserProos = {
    name: string,
    age: number;
    isRegister: boolean
}


const User = ({ name, age, isRegister }: UserProos) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>{age} years old</p>
            {isRegister ? 'Registered' : 'Not Registered'}
        </div>
    )
}

export default User
