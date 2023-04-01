import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Footer from './Footer';


function Signup({onLogin}) {
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);
    const [regForm, setRegForm] = useState({
        username: "",
        email: "",
        password: "",
        password_confirmation: ""
      })
      function handleFormInput(e) {
        const name = e.target.name;
        let value = e.target.value;
        setRegForm({
            ...regForm,
            [name]: value,
          });
      }
      function handleSignupSubmit(e) {
        e.preventDefault()
        setErrors([]);
        fetch('/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(regForm)
          }).then(res => {
            if (res.ok){
                res.json().then((newUser)=> {
                    navigate ('/')
                  return  onLogin(newUser)});
            } else {
                res.json().then((err)=> setErrors(err.errors));
            }
            })  
      }

    return (
<>
    <form class="container" onSubmit={handleSignupSubmit} style={{margin: "50px 350px"}}>
        <div class="card" style={{ height: "650px"}}>
            <div class="user signup_form">
                <div class="form">
                    <div class="text_signup">
                        <h4>Create An Account</h4>
                        <h2>Sign up for free</h2>
                        <p>Already have an account <a href="#" class="signin-click" onClick={()=>navigate ('/login')}>Sign In</a></p>
                    </div>
                    <div class="input-text-signup"> <input type="text" required name="username" value={regForm.username} onChange={handleFormInput}/> <i class="fa fa-user"></i> <label>Username*</label> </div>
                    <div class="input-text-signup"> <input type="text" name="email" value={regForm.email} required onChange={handleFormInput}/> <i class="fa fa-envelope-o"></i> <label>E-mail*</label> </div>
                    <div class="input-text-signup"> <input type="password" className="password_input" name="password" value={regForm.password} required onChange={handleFormInput}/> <i class="fa fa-eye-slash"></i> <label>Password*</label> </div>
                    <div class="input-text-signup"> <input type="password" className="password_input" required name="password_confirmation" onChange={handleFormInput} value={regForm.password_confirmation}/> <i class="fa fa-eye-slash"></i> <label>Confirm Password*</label> </div>
                    {
                        errors?.length > 0 ? errors.map((err) => (<li style={{color: "red", fontSize: "12px"}}key={err}>{err}</li>)) : ""
                    }
                    <div class="signup-button"> <button type='submit'>Sign up</button> </div>
                    <div class="policy">
                        <p>By clicking Sign up, you agree to our<a href="#">Terms and Conditions</a>.</p>
                    </div>
                </div>
                <div class="image-box"> <img src="https://media.istockphoto.com/id/1415886887/photo/freshly-painted-craftsman-bungalow-house.jpg?b=1&s=170667a&w=0&k=20&c=HE7W2sfriTozr-MghVy2XnadF7bXvgDljKdzt4-iq_I="/> </div>
            </div>
        </div>
    </form>
    <Footer></Footer>
    </>
    )
}
export default Signup;