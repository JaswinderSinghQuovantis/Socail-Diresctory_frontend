import React from "react";
import './signup.css';
import  {Register} from "../../services/service";
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import images from '../../image/image.png'
const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/;
const phoneNoregex = /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/;


export default function Signup() {
    const [email, setemail] = React.useState("");
    const [password, setpassword] = React.useState("");
    const [phoneNo, setphoneno] = React.useState("");
    const [regexCredential, setregexCredential] = React.useState({ emailborder: false, passwordborder: false, phoneNoborder: false });
    const [regexhelperCredential, setregexhelperCredential] = React.useState({ emailtext: "", passwordtext: "", phoneNotext: "" })

    function Email(e) {
        setemail(e.target.value);
    }

    function Password(e) {
        setpassword(e.target.value);
    }

    function PhoneNumber(e) {
        setphoneno(e.target.value)
    }
    const onsubmit = async () => {
        if (email === "" && password === "" && phoneNo === "") {
            setregexCredential(regexCredential => ({ ...regexCredential, emailborder: true, passwordborder: true, phoneNoborder: true }))
            setregexhelperCredential(regexhelperCredential => ({ ...regexhelperCredential, emailtext: "Enter a correct email", passwordtext: "Enter a correct password", phoneNotext: "Enter a valid Phone Number" }))
        }
        else {
            const phoneNotest = phoneNoregex.test(phoneNo)
            const passwordTest = passwordRegex.test(password);
            const emailTest = emailRegex.test(email);
            if (emailTest && passwordTest && phoneNo) {
                setregexCredential(regexCredential => ({ ...regexCredential, emailborder: false, passwordborder: false, phoneNoborder: false }))
                setregexhelperCredential(regexhelperCredential => ({ ...regexhelperCredential, emailtext: "", passwordtext: "", phoneNotext: "" }))
            }

            if (emailTest) {
                setregexCredential(regexCredential => ({ ...regexCredential, emailborder: false }))
                setregexhelperCredential(regexhelperCredential => ({ ...regexhelperCredential, emailtext: "" }))
            }
            else {
                setregexCredential(regexCredential => ({ ...regexCredential, emailborder: true }))
                setregexhelperCredential(regexhelperCredential => ({ ...regexhelperCredential, emailtext: "Enter a correct emaili" }))
            }
            if (passwordTest) {
                setregexCredential(regexCredential => ({ ...regexCredential, passwordborder: false }))
                setregexhelperCredential(regexhelperCredential => ({ ...regexhelperCredential, passwordtext: "" }))
            }
            else {
                setregexCredential(regexCredential => ({ ...regexCredential, passwordborder: true }))
                setregexhelperCredential(regexhelperCredential => ({ ...regexhelperCredential, passwordtext: "Enter a correct password" }))
            }
            if (phoneNotest) {
                setregexCredential(regexCredential => ({ ...regexCredential, phoneNoborder: false }))
                setregexhelperCredential(regexhelperCredential => ({ ...regexhelperCredential, phoneNotext: "" }))
            }
            else {
                setregexinfo(regexinfo => ({ ...regexinfo, phoneNoborder: true }))
                setregexhelpertext(regexhelpertext => ({ ...regexhelpertext, phoneNotest: "Enter a correct String" }))

            }
            if (emailTest === true && passwordTest === true && phoneNotest === true) {
                let obj = {
                    "email": email,
                    "password": password,
                    "phoneNo": phoneNo
                }
                try {
                    let response = await Register(obj)
                    if (!response) {
                        console.log(response)
                    }
                    else {
                        console.log(response)
                    }
                    console.log(obj);
                }
                catch (error) {
                    console.log(error);
                }
            }

        }
    }

    return (
        <div className="Box-class">
            <div className="container">
                <div className="formClass">
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
                    <div className='heading'>
                        <h2>Register Here</h2>
                    </div>
                    <div className='email'>
                        <TextField id="email" helperText={regexhelperCredential.emailtext} onChange={Email} error={regexCredential.emailborder} label="Enter a MailId" size='small' variant="outlined" />
                    </div>
                    <div className='password-rectangle'>
                        <div className='userpassword'>
                            <TextField id="userpassword" helperText={regexhelperCredential.passwordtext} onChange={Password} error={regexCredential.passwordborder} label="Password" size='small' variant="outlined" autoComplete="current-password" />
                        </div>
                    </div>
                    <div className='meta-text'>
                        characters should be min 8 letter and with a mix of letters,numbers,
                        symbol
                    </div>
                    <div className='checkbox'>
                        <FormControlLabel disabled control={<Checkbox />} label="Password" />
                    </div>
                    <div className='phoneNo'>
                        <TextField id="phoneNo" helperText={regexhelperCredential.passwordtext} onChange={PhoneNumber} error={regexCredential.phoneNoborder} label="Phone Number" size='small' variant="outlined" autoComplete="current-password" />
                    </div>
                    <div className='button'>
                        <div className="button-end">
                            <Button onClick={onsubmit} variant="contained">Register</Button>
                        </div>
                    </div>
                </div>
                <div className="Img-class" >
                    <img src={images}></img>
                </div>
            </div>
        </div>
    )
}
