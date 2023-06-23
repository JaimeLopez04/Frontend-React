import React from "react"
import Sidebar from "./Components/side-bar"
import SearchBar from "./Components/SearchBar"
import Login from "./auth/Login"
import Registro from "./auth/Registro";


function App() {
    const [user, setUser] = React.useState(null);
    const [auth, setAuthState] = React.useState(null);

    return (
        <>
            {/* <Login/> */}
            <div className="bg-black flex flex-row" >

            {/* Barra Lateral */}
                  <div className="w-full h-screen bg-back object-cover flex items-center">
                  <Sidebar/>
            </div>

            <div className="left-[5rm]">
                    <SearchBar/>
            </div>



             <Registro/>
        </>
    )


  // React.useEffect(() => {
  //   const unSubscribeAuth = onAuthStateChanged(auth,
  //     async authenticatedUser => {
  //       if(authenticatedUser) {
  //         setUser(authenticatedUser.email)
  //         setAuthState('home');
  //       } else {
  //         setUser(null);
  //         setAuthState('login')
  //       }
  //     })

  //     return unSubscribeAuth;
  // }, [user])

  // if(authState === null) return <div className='font-bold text-center text-5xl'>cargando...</div>
  // if(authState === 'login') return <Login setAuthState={setAuthState} setUser={setUser}/>
  // if(authState === 'register') return <Registro setAuthState={setAuthState} setUser={setUser}/> 
  // if(user) return <Home user={user} setAuthState={setAuthState} setUser={setUser}/>

}

export default App
