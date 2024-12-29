import React from 'react'
import UserList from './components/UserList'
import Users from "./assets/users.json";

function App() {
  return (
    <div>
        <UserList data={Users}/>
    </div>
  )
}

export default App;