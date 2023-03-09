// import { requirePropFactory } from "@material-ui/core";
import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate, useNavigation } from "react-router-dom";
// import { getAuth,RecaptchaVerifier,signInWithPhoneNumber  } from "firebase/auth";
import './signIn.css';
import { Alert } from "react-bootstrap";
import GoogleButton from "react-google-button"
import { useCustomContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const [erroe, SetError] = useState("");
    const navigate = useNavigate();

    const { signin, googleSignIn } = useCustomContext();


    const submitEvalution = async () => {
        try {
            await signin(email, password);
            localStorage.setItem("UserDeatils", email);
            window.location.replace('/Home');
        } catch (e) {
            SetError(e.message);
        }
    }
    const googleHandleSubmit = async (e) => {
        try {
            await googleSignIn();
            window.location.replace('/Home');
        } catch (e) {
            SetError(e.message);
        }
    }

    const phoneNumberSignin = () => {
        navigate("/phoneNumber")
    }

    console.log(erroe, "erroeerroeerroe");
    return (
        <div className="signinDiv">
            <div className="divSignIN" id="divSignIN">
                <div className="ARSImage">
                    <img src={require("./Ajay.png")} width={'150px'} height={'90px'} className={"ARSImage1"} alt={"lading"} />
                </div>
                {erroe && <Alert variant="danger">{erroe}</Alert>}
                <div className="divLoginText" id="divLoginText">
                    <section className="sectionSignin" id="sectionSignin">
                        <h1 className="logintext">Log in to ARS Fashion</h1>
                    </section>
                </div>
                <div className="googleButton">
                    <GoogleButton className="google-btn" onClick={googleHandleSubmit} />
                </div>
                <div className="orTag">
                    <section>
                        ---or---
                    </section>
                </div>
                <div style={{ display: "flex", justifyContent: "center",margin:"0.5rem 0 0.5rem 0"  }}>
                    <div style={
                        {
                            height: '50px',
                            width: '240px',
                            backgroundColor: "#4285f4",
                            cursor:"pointer",
                            
                        }}>
                        <div onClick={phoneNumberSignin}>
                            <div className="forPhoneBlock">
                                <span className="phonecallimage">
                                    <img src={require("../images/phoneCall.png")} style={{ maxWidth: "35px", }} alt={"loading"}/>
                                </span>

                                <span style={{ fontFamily: 'Roboto,arial,sans-serif', display: 'flex', color: "#fff", width: "80%", flexWrap: "wrap", fontSize: 15, alignSelf: "flex-end", justifyContent: "center", height: "50px", alignItems: "center" }}>
                                    SignIn with PhoneNumber
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="orTag">
                    <section>
                        ---or---
                    </section>
                </div>
                <section className="divSection1" id="divSection1">
                    <input className="signInInput" id="signInInput" onChange={(email) => {
                        setemail(email.target.value)
                    }} placeholder='Email address or phone number' />
                </section>
                <section className="divSection1" id="divSection2">
                    <input className="signInInput" id="signInInput" onChange={(password) => {
                        setPassword(password.target.value)
                    }} placeholder='Password' />
                </section>
                <div className="sectionButton">
                    <button value={'submit'} onClick={submitEvalution} className='signinSubmitButton'>submit</button>
                </div>

                <div className="divSectionSignUp">
                    <a href="/SignUp" className="signUp" target={'_self'}>
                        signUp
                    </a>
                    <a href="/ForgetPassword" className="ForgetPassword" target={'_self'}>
                        Forgotten account?
                    </a>
                </div>

            </div>
        </div>
    )
}

export default SignIn;