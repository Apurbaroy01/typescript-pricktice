
import './App.css'
import User from './Components/User'

function App() {


  return (

    <div>
      <h2>User</h2>
      <User name="Apurba Roy" age={23} isRegister={true}></User>
      <User name="AkashRoy" age={20} isRegister={false}></User>
    </div>


  )
}

export default App
