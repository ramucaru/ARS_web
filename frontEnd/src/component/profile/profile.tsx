import * as React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";

interface InputState {
    Birthday: string,
    LastName: string,
    NewPassWord: string,
    firstName: string,
    gender: string,
    id: number,
    images: string,
    phoneNumber: number
}
const Profile = () => {

    const [GetData, setGetdata] = useState<InputState[]>([]);
    console.log(GetData, "GetData");

    const getDta = () => {
        Axios.get('http://192.168.34.101:3001/api/get').then((i) => {
            // alert('succesfully received data');
            setGetdata(i.data);
            console.log(i.data);
        }).catch((e) => {
            console.log(e);
            alert('while reciving data got error');
        })
    }

    useEffect(() => {
        getDta();
    }, [])

    return (
        <div className="headProfile">
            Ram profile page
            <div>
                <div>
                    <form >
                        <span className="details">Profile</span>
                        <div>
                            <label htmlFor="firstName"><b>FirstName :</b></label>
                            <input type={"text"} id="firstName" placeholder="FirstName" />
                        </div>
                        <div>
                            <div>
                                <label htmlFor="LastName"><b>LastName :</b></label>
                                <input type={"text"} id="LastName" placeholder="LastName" />
                            </div>
                        </div>
                        <div>
                            <div>
                                <label htmlFor="Birthday"><b>Birthday :</b></label>
                                <input type={"text"} id="Birthday" placeholder="Birthday" />
                            </div>
                        </div>
                        <div>
                            <div>
                                <label htmlFor="gender"><b>gender :</b></label>
                                <input type={"text"} id="gender" placeholder="gender" />
                            </div>
                        </div>
                        <div>
                            <div>
                                <label htmlFor="phoneNumber"><b>phoneNumber :</b></label>
                                <input type={"text"} id="phoneNumber" placeholder="phoneNumber" />
                            </div>
                        </div>
                       
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Profile;