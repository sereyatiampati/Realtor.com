import React from 'react'
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    return (
        <div class="container">
        <div class="card">
            
            <div class="user signin_form">
                <div class="image-box"> <img src="https://imgur.com/FUfgyLv.jpg"/> </div>
                <div class="form">
                    <div class="text_signup">
                        {/* <h4>Start your journey</h4> */}
                        <h2>Login to Realtor.com</h2>
                        <p>Don't have an account?<a href="#" class="signup-click" onClick={()=>navigate ('/join-realtor.com')}>Sign Up</a></p>
                    </div>
                    <div class="input-text-signup"> <input type="text" required/> <i class="fa fa-envelope-o"></i> <label>E-mail</label> </div>
                    <div class="input-text-signup"> <input type="password" id="password_input_signin" required/> <i class="fa fa-eye-slash change_eye"></i> <label>Password</label> </div>
                    <div class="signup-button"> <button>Sign in</button> </div>
                    <div class="policy">
                        <p>By clicking Sign up,you agree to our <a href="#">Terms</a> and that you have read our <a href="#">Data Use Policy</a> ,including our <a href="#">Cookie Use</a>. </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        )
    }
    export default Login;