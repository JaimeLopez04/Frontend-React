import React from "react"
import Login from "./auth/Login"

function App() {
  const [user, setUser] = React.useState();
  const [auth, setAuthState] = React.useState();

  return (
    <>
      <Login/>
    </>
  )
}

export default App
