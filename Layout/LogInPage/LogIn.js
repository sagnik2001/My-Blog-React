import "./LogIn.css"
import React from "react"
const LogIn =(props)=>{
  const {
    email,
    setEmail,
    password,
    setPassword,
    handlelogIn,
    handleSignUp,
    hasAccount,
    sethasAccount,
    emailError,
    passwordError,
  }=props
  return(

       <section className="login">
          <div className="loginContainer">
              <label>UserName</label>
              <input
                type="text"
                autoFocus required value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
              <p className="errorMsg">{emailError}</p>
              <label>Password</label>
              <input
                 type="password"
                 required value={password}
                 onChange={(e)=>setPassword(e.target.value)}
              />
              <p className="errorMsg">{passwordError}</p>
              <div className="btnContainer">
                  {hasAccount ? (
                    <>
                       <button onClick={handlelogIn}>Log In</button>
                       <p>
                          Dont Have an Account? <span onClick={()=>sethasAccount(!hasAccount)}>Sign Up</span>
                       </p>
                    </>
                  ):
                  (
                    <>
                       <button onClick={handleSignUp}>Sign Up</button>
                       <p>
                         Have an Account? <span onClick={()=>sethasAccount(!hasAccount)}>Log In</span>
                       </p>
                    </>
                  )}
              </div>
           </div>

       </section>

  )
}
export default LogIn
