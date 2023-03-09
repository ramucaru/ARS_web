import React, { useState } from "react";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useCustomContext } from "../../context/UserContext";
import "./phoneNumber.css"

const PhoneNumer = () => {

    const [phoneNumber, setPhoneNumber] = useState("");
    const { recaptchaVerifier } = useCustomContext();
    const [verifier, setVerifier] = useState();
    const [otp, setOtp] = useState("");
    const [visible, setvisible] = useState(false);
    const navigate = useNavigate();

    const sendOtp = async () => {
        console.log(phoneNumber);
        if (phoneNumber === "" || phoneNumber === null) return alert("Enter Phone Number");
        try {
            const logs = await recaptchaVerifier(phoneNumber);
            setVerifier(logs);
            setvisible(true);
        } catch (e) {
            alert(e.message);
        }
    }

    const verifyOtp = async () => {
        try {
            if (otp === "" || otp === null) return alert("otpisEmpty please EnterOTP");
            await verifier.confirm(otp);
            navigate("/Home")
        } catch (e) {
            alert(e);
        }
    }
    return (
        <div className="phoneNumbercomponent">
            <div className="componentBody">
                <div>
                    <div className="SignInWithPhoneNumber">
                        <b>SignIn With PhoneNumber</b>
                    </div>
                </div>
                <div style={{ display: visible ? "none" : "block" }}>
                    <PhoneInput
                        defaultCountry="IN"
                        placeholder="Enter phone number"
                        value={phoneNumber}
                        onChange={setPhoneNumber}
                    />
                    <div>
                        <section className="sendOtpButton">
                            <Button title="Send Otp" onClick={sendOtp}>
                                sendOtp
                            </Button>
                        </section>
                    </div>
                    
                </div>

                <div id="recaptcha-container" />
                <div style={{ display: !visible ? "none" : "block" }}>
                    <form>
                        <input type={"number"} onChange={(e) => setOtp(e.target.value)} />
                    </form>
                    <section>
                        <Button title="Send Otp" onClick={verifyOtp}>
                            verifyOtp
                        </Button>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default PhoneNumer;