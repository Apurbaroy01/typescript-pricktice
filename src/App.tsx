
import './App.css'
import User from './Components/User'

function App() {
  
  const user1 = {
    name: "Apurba Roy",
    age: 23,
    isRegister: true,
    lang: ["Javascript", "Typescript", "React"]
  }


  return (

    <div>
      <h2>User</h2>
      <User user={user1}></User>
    </div>


  )
}

export default App
