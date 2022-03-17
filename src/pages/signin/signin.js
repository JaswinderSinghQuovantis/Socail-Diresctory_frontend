import React from "react";
import './signin.css';
import { login } from '../../services/service.js'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/;
const passRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;


export default function Signin() {
    let history = useHistory()
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [regexobj, setregexobj] = React.useState({ emailborder: false, passwordborder: false })
    const [regexhelpertext, setregexhelpertext] = React.useState({ emailhelpertext: "", passwordhelpertext: "" })

    const Email = (e) => {
        setEmail(e.target.value);
    }
    const Password = (e) => {
        setPassword(e.target.value);
    }
    const Submit = async() => {
        if (email === "" && password === "") {
            setregexobj({ ...regexobj, emailborder: true, passwordborder: true })
            setregexhelpertext({ ...regexhelpertext, emailhelpertext: "Enter a correct email", passwordhelpertext: "Enter a correct password" })
        }
        else {
            let emailtest = emailRegex.test(email)
            let passwordtest = passRegex.test(password)
            if (emailtest) {
                setregexobj(regexobj => ({ ...regexobj, emailborder: false }))
                setregexhelpertext({ ...regexhelpertext, emailhelpertext: "" })
            }
            else {
                setregexobj(regexobj => ({ ...regexobj, emailborder: true }))
                setregexhelpertext({ emailhelpertext: "Enter a correct Email" })
            }
            if (passwordtest) {
                setregexobj(regexobj => ({ ...regexobj, passwordborder: false }))
                setregexhelpertext({ ...regexhelpertext, passwordhelpertext: "" })
            }
            else {
                setregexobj(regexobj => ({ ...regexobj, passwordborder: true }))
                setregexhelpertext({ ...regexhelpertext, passwordhelpertext: "Enter a correct password" })
            }
            if (emailtest === true && passwordtest === true) {
                let obj = {
                    "email": email,
                    "password": password
                }
               let res = await login(obj)
               try{
                if(!res){
                    console.log(res)
                }else if(res){
                    console.log(res.data)
                    localStorage.setItem("token",res.data.data)
                    history.push("/Dashboard")
                }
                    console.log(obj);
               }
               catch(error){
                   console.log(error)
               }    
            }
        }
    }   

    return (
        <div className="Box-class">
            <div className="form-class">
                    <div className='google'>
                    <span className='first'>S</span>
                    <span className='second'>o</span>
                    <span className='third'>c</span>
                    <span className='four'>i</span>
                    <span className='five'>a</span>
                    <span className='Six'>l</span>
                    <span className='seven'>D</span>
                    <span className='eight'>i</span>
                    <span className='nine'>r</span>
                    <span className='ten'>e</span>
                    <span className='eleven'>c</span>
                    <span className='twoleve'>t</span>
                    <span className='thirteen'>o</span>
                    <span className='forteen'>r</span>
                    <span className='fifteen'>y</span>
                    </div>
                <div className='sign'>
                    <h2>Sign In</h2>
                </div>
                <div className='account-text'>
                    <h5>Use Your Account Here</h5>
                </div>
                <div className='email1'>
                    <TextField id="Email" onChange={Email} helperText={regexhelpertext.emailhelpertext} error={regexobj.emailborder} label="Email or Phone" size='small' variant="outlined" />
                </div>
                <div className="password">
                    <TextField id="password" onChange={Password} helperText={regexhelpertext.passwordhelpertext} error={regexobj.passwordborder} label="Password" size='small' variant="outlined" />
                </div>
                <div className='textletter'>
                    Use to Login in privately</div>
                <div className='account'>
                    <div className='btm'>
                        <Button onClick={Submit} variant="contained">login</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}