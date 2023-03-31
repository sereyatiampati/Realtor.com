import React,{ useState } from 'react'
import { useNavigate } from "react-router-dom";

function Login({onLogin}) {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    function handleSubmit(e) {
        e.preventDefault()
        setErrors([])
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }).then((r) => {
          if (r.ok) {
            r.json().then((user) =>{
              navigate ('/')
             return  onLogin(user)});
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
        setPassword("")
    }

    return (
        <form class="container" onSubmit={handleSubmit} style={{margin: "100px 350px"}}>
        <div class="card">
            <div class="user signin_form">
                <div class="image-box"> <img src="https://media.istockphoto.com/id/1416166526/photo/businessman-using-laptop-to-search-planning-and-investing-in-real-estate-property-management.jpg?b=1&s=170667a&w=0&k=20&c=N-TTs4EXo4oqMeOd_4XFxM-_9jehteKCfdhZVDxnf6U="/> </div>
                <div class="form">
                    <div class="text_signup">
                        {/* <h4>Start your journey</h4> */}
                        <h2>Login to Realtor.com</h2>
                        <p>Don't have an account?<a href="#" class="signup-click" onClick={()=>navigate ('/join-realtor.com')}>Sign Up</a></p>
                    </div>
                    <div class="input-text-signup"> <input type="text" required value={email} onChange={(e)=>setEmail(e.target.value)}/> <i class="fa fa-envelope-o"></i> <label>E-mail</label> </div>
                    <div class="input-text-signup"> <input type="password" id="password_input_signin" required value={password} onChange={(e)=>setPassword(e.target.value)}/> <i class="fa fa-eye-slash change_eye"></i> <label>Password</label> </div>
                    {
                            errors?.length > 0 ? errors.map((error)=><li style={{color: "red", fontSize: "12px"}} key={error}>{error}</li>) : ""
                    }
                    <div class="signup-button"> <button type='submit'>Sign in</button> </div>
                    <div class="policy">
                        <p>By clicking Sign up,you agree to our <a href="#">Terms</a> and that you have read our <a href="#">Data Use Policy</a> ,including our <a href="#">Cookie Use</a>.</p>
                    </div>
                </div>
            </div>
        </div>
    </form>
        )
    }
    export default Login;