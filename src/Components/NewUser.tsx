import React, { useState, MouseEvent, ChangeEvent } from 'react';

const NewUser = () => {
    const [user, setuser]=useState("")

    const handleUser =(e:ChangeEvent<HTMLInputElement>)=>{
        setuser(e.target.value)
    
    }

    const handleClick =(e:MouseEvent<HTMLButtonElement>)=>{
        alert(user)  
    }
    return (
        <div>
            New user Components
            <input type="text" placeholder='name' value={user} onChange={handleUser}/>
            <button onClick={handleClick}>Submit</button>
            <p>{user}</p>
        </div>
    );
};

export default NewUser;