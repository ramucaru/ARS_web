// import { requirePropFactory } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCustomContext } from "../../context/UserContext";
import "./home.css"

const Home = () => {
    const [data, setdata] = useState('');
    const { user,logout } = useCustomContext();
    const getdataFromLocalStorage = localStorage.getItem("UserDeatils");
    const getDetails = () => {
        axios.get('http://192.168.34.101:3001/api/get').then((item) => {
            setdata(item.data);
        }).catch((error) => {
            // alert('retry Again')
        })
    }
    console.log(data, "data", "getdataFromLocalStorage", getdataFromLocalStorage);

    const logOutFunction = async () => {
         try {
            await logout();
         } catch(e) {
            alert(e.message)
         }
    }

    useEffect(() => {
        getDetails();
    }, [])
    return (
        <div className="HomePage">
            <div className="HeadesPage">
                <div className="HeadesPage2">
                    <ul className="listStyleType">
                        <li>
                            {/* <a href="#">Home</a> */}
                        </li>
                        <li>
                            <Link to="/Home/profile">
                                profile
                            </Link>
                        </li>
                        <li>
                            about
                        </li>
                        <li>
                            <Link onClick={logOutFunction}>LogOut</Link>
                        </li>
                    </ul>
                    <div>
                        signed in with {user.email}
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Home;