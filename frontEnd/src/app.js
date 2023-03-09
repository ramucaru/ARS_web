import React, { /*useEffect*/ } from 'react';
import SignUp from './component/signUp/signUp';
import SignIn from './component/signIn/signIn';
import ForgetPassword from './component/forgetPassword/ForgetPassword';
import ResetPassword from './component/ResetPassword/ResetPassword';
import Home from './component/Home/home';
import { BrowserRouter, Routes, Route, /*HashRouter*/ } from "react-router-dom";
import Profile from './component/profile/profile';
import { UserContext } from './context/UserContext';
import ProtectedRoute from './component/signIn/protectedRoute';
import PhoneNumer from './component/phoneNumber/phoneNumber';

// const firebaseConfig = {
//     authDomain: "ars-digital-marketing.firebaseapp.com",
//     projectId: "ars-digital-marketing",
//     storageBucket: "ars-digital-marketing.appspot.com",
//     messagingSenderId: "331583679575",
//     appId: "1:331583679575:web:cf5143286b2ae9541e8712",
//     measurementId: "G-F19WHX9E88"
// };


const App = () => {
    return (
        <BrowserRouter>
            <UserContext>
                <Routes>
                    <Route path="/">
                        <Route index path="/" element={<SignIn />} />
                        <Route path='/Home' >
                            <Route index element={
                                <ProtectedRoute>
                                    <Home />
                                </ProtectedRoute>
                            } />
                            <Route path=':profile' element={<Profile />} />
                        </Route>
                        <Route path='/phoneNumber' element={<PhoneNumer />} />
                    </Route>
                    <Route path="SignUp" element={<SignUp />} />
                    <Route path='/ForgetPassword'>
                        <Route index element={<ForgetPassword />} />
                        <Route path=':ResetPassword' element={<ResetPassword />} />
                    </Route>

                </Routes>
            </UserContext>
        </BrowserRouter>
    )
}

export default App;