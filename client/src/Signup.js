import React from 'react'
import { useNavigate } from "react-router-dom";

function Signup() {
    const navigate = useNavigate();
    return (
<div class="container">
    <div class="card">
        <div class="user signup_form">
            <div class="form">
                <div class="text_signup">
                    <h4>Create An Account</h4>
                    <h2>Sign up for free</h2>
                    <p>Already have an account <a href="#" class="signin-click" onClick={()=>navigate ('/login')}>Sign In</a></p>
                </div>
                <div class="input-text-signup"> <input type="text" required/> <i class="fa fa-user"></i> <label>Username*</label> </div>
                <div class="input-text-signup"> <input type="text" required/> <i class="fa fa-envelope-o"></i> <label>E-mail*</label> </div>
                <div class="input-text-signup"> <input type="password" id="password_input" required/> <i class="fa fa-eye-slash"></i> <label>Password*</label> </div>
                <div class="input-text-signup"> <input type="password" id="password_input" required/> <i class="fa fa-eye-slash"></i> <label>Confirm Password*</label> </div>
                <div class="signup-button"> <button>Sign up</button> </div>
                <div class="policy">
                    <p>By clicking Sign up,you agree to our <a href="#">Terms</a> and that you have read our <a href="#">Data Use Policy</a> ,including our <a href="#">Cookie Use</a>. </p>
                </div>
            </div>
            <div class="image-box"> <img src="https://media.istockphoto.com/id/1415886887/photo/freshly-painted-craftsman-bungalow-house.jpg?b=1&s=170667a&w=0&k=20&c=HE7W2sfriTozr-MghVy2XnadF7bXvgDljKdzt4-iq_I="/> </div>
        </div>
    </div>
</div>
    )
}
export default Signup;