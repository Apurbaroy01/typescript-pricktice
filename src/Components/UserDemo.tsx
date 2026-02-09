import React from 'react'

type userDemoPeops = {
    users: {
        id: number;
        name: string;
        age: number;
        isRegister: boolean;
        lang: string[];
    }[]
}

const UserDemo = ({users}: userDemoPeops) => {
    return (
        <div>
            <h2>User Demo</h2>
            {users.map(user => (
                <div key={user.id}>
                    <h3>{user.name}</h3>
                    <p>Age: {user.age}</p>
                    <p>Registered: {user.isRegister ? "Yes" : "No"}</p>
                    <p>Languages: {user.lang.join(', ')}</p>
                </div>
            ))}
        </div>
    )
}

export default UserDemo;
