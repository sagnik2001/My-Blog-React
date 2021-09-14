import {React,useState,useEffect} from "react"
import Main from "./Layout/Homepage/Main/Main.js"
import Heading from "./Layout/Homepage/Headings/Heading.js"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import ViewArticle from "./ViewArticle/ViewArticle.js"
import NewArticle from "./NewArticle/NewArticle.js"
import fire from "./Config/FirebaseLogIn.js"
import LogIn from "./Layout/LogInPage/LogIn.js"
import "./App.css"
function App() {
 const [user,setUser]=useState('')
 const [email,setEmail]=useState('')
const [password,setPassword] =useState('')
const [emailError,setEmailError]  =useState('')
const [passwordError,setPasswordError]  =useState('')
  const [hasAccount,sethasAccount]=useState(false)
  const clearInputs=()=>{
    setEmail("");
    setPassword("");
  }
  const clearErrors=()=>{
    setEmailError("");
    setPasswordError("");
  }
  const handlelogIn=()=>{
    clearErrors();
    fire
    .auth()
    .signInWithEmailAndPassword(email,password)
    .catch((err)=>{
      switch(err.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(err.message);
          break;
        case "auth/wrong-password":
           setPasswordError(err.message);
           break;
      }
    })
  }
  const handleSignOut=()=>{
    fire.auth().signOut();
  }
  const handleSignUp =()=>{
    clearErrors();
    fire
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .catch((err)=>{
      switch(err.code){
        case "auth/email-already-in-use":
        case "auth/Invalid-email":
          setEmailError(err.message);
          break;
        case "auth/weak-password":
           setPasswordError(err.message);
           break;
      }
    })
  }

  const authListener=()=>{
    fire.auth().onAuthStateChanged(function(user) {
  if (user) {
       clearInputs();
      setUser(user);
    }
    else{
      setUser("");
    }
});
  }
  useEffect(()=>{
    authListener();
  },[])

  return (
    <div className="App">
     {user? (
       <Router>
     <Heading handleSignOut={handleSignOut}/>
     <Switch>
       <Route path="/" exact>
           <Main/>
       </Route>
       <Route path="/article/:id">
           <ViewArticle/>
       </Route>
       <Route path="/new-article">
           <NewArticle/>
       </Route>
     </Switch>


   </Router>
 ):(

     <LogIn
       email={email}
       setEmail={setEmail}
       password={password}
       setPassword={setPassword}
       handlelogIn={handlelogIn}
       handleSignUp={handleSignUp}
       hasAccount={hasAccount}
       sethasAccount={sethasAccount}
       emailError={emailError}
       passwordError={passwordError}
        />

 )}






    </div>
  );
}

export default App;
