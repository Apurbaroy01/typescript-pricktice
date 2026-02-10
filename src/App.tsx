
import { useState } from 'react'
import './App.css'

type user ={
  id: number,
  name: string,

}

function App() {
  const [count, setCount] = useState<null | user>(null)

  const handleCount = () => {
    setCount({id: 1, name: "Apurba"})
  }

  return (

    <div>
      

      <button onClick={handleCount}>Add user</button>
      <p>{count?.id}</p>
      <p>{count?.name}</p>

    </div>


  )
}

export default App
