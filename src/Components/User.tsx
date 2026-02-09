import React from 'react'

type UserProps = {
    user: {
        name: string;
        age: number;
        isRegister: boolean;
        lang: string[];
    }
}


const User = ({ user }: UserProps) => {
    return (
        <div>
            <h2>{user.name}</h2>
            <p>{user.age} years old</p>
            {user.isRegister ? 'Registered' : 'Not Registered'}
            {user.lang && (
                <div>
                    <h3>Languages:</h3>
                    <ul>
                        {user.lang.map((language, index) => (
                            <li key={index}>{language}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default User
