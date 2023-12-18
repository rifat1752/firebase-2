import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import './App.css'
import app from "./Firebase/Firebase.config";
import { useState } from "react";

function App() {
  const [loggedUser,setLoggedUser] = useState(null)
  const auth = getAuth(app);  
  const googleProvider = new GoogleAuthProvider();
  const googleHandler=()=>{
    signInWithPopup(auth,googleProvider)
    .then(result=>{
      const User = result.user;
      setLoggedUser(User);
      console.log(User)
    })
    .catch(error=>{
      console.log(error.message);
    })
  }
  const style = {
    'display': 'flex',
    'justify-content':'center',
    'align-items':'center'
  }
  return (
    <>
      
      <h1>Firebase + React</h1>
      <button onClick={googleHandler}>Google sign in</button>
      {
        loggedUser && 
        <div>
          <br />
          <img src={loggedUser.photoURL} alt="" />
          <p style={style}><h1>Name : </h1> {loggedUser.displayName}</p>
          <p style={style}><h1>Email : </h1>{loggedUser.email}</p>
          
        </div>
      }
    </>
  )
}

export default App
