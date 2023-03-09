import React, { useState } from 'react';
import './App.css';
// import Axios from 'axios';
import { Radio, RadioGroup, FormControlLabel, FormControl,/* FormLabel, makeStyles*/ } from "@material-ui/core";
// import { useNavigate } from 'react-router-dom';
import { useCustomContext } from '../../context/UserContext';

function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [newPassword, setNewPassword] = useState('');
  const [date, setDate] = useState();
  const [month, setMonth] = useState();
  const [year, setyear] = useState();
  const [gender, setGender] = useState('');
  const [imageeee, setImage] = useState();
  const [errors, SetErrors] = useState();
  // const navigate = useNavigate();
  console.log(imageeee, 'imageee');
  const { signUp } = useCustomContext();
  function handleClick(event) {
    if (event.target.value === gender) {
      setGender("");
    } else {
      setGender(event.target.value);
    }
  }
console.log(firstName,lastName,date,month,year,errors);
  const submitReview = async () => {
    // if (firstName && lastName && phoneNumber && newPassword && year && month && date && gender && imageeee) {
    //   Axios.post('http://192.168.34.101:3001/api/insert', { firstName: firstName, LastName: lastName, phoneNumber: phoneNumber, Password: newPassword, date: `${year}-${month}-${date}`, gender: gender, images: imageeee })
    //     .then(async (res) => {
    //       // if(window.confirm('succesfully created do you want to go log in page')){
    //       //   // navigate("/");
    //       //   // SignUp()
    //       // } else {
    //       //   console.log("cancel clicked");
    //       // }
    //       try{
    //         await SignUp(phoneNumber,newPassword)
    //       } catch(e) {
    //          alert(errors.message)
    //       }
    //     }).catch((e) => {
    //       // alert('undefined')
    //     })
    // } else {
    //   alert("Please Enter Empty Field");
    // }
    try {
      await signUp(phoneNumber, newPassword)
    } catch (e) {
      alert(e.message,"aaa")
      SetErrors(e.message);
    }
  }

  return (
    <div className="App" style={{ width: '100%', height: '100%' }}>
      <div className='AppDiv' >
        <section className='sectionofARS' id='sectionofARS'>
          <div>
            <img src={require('../images/Ajay.png')} width={'150px'} height={'90px'} alt={"loading"} />
          </div>
          <div>
            <h1 className='h1forHeading' id='h1ForHeading'>ARS Fashion</h1>
          </div>
        </section>
        <section id='formSection' className='formSection'>
          <div className='formDiv'>
            <div className='createnewAccountDiv'>
              <div className='createnewSpan'>
                <div className='createnew'>Create a new account</div>
                <div>It's quick and easy.</div>
              </div>
            </div>
            <div>
              <div className='firstLastnameDiv'>
                <span className='firstnameSpan'>
                  <input type='text' id='firstnameinput' className='firstnameinput' name='firstname' onChange={(name) => {
                    setFirstName(name.target.value);
                  }} placeholder='First name' aria-label='Firstname' aria-describedby="js_4ys" />
                </span>
                <span className='lastnameSpan'>
                  <input style={{ marginTop: '12px' }} type={'text'} id='lastNameinput' className='lastNameinput' onChange={(name) => {
                    setLastName(name.target.value);
                  }} placeholder='Surname' />
                </span>
              </div>

              <div>
                <input style={{ marginTop: '12px' }} type={'text'} id='phoneNumberinput' className='label' onChange={(phone) => {
                  setPhoneNumber(phone.target.value);
                }} placeholder='Mobile number or email address' autoComplete='off' autoCorrect='off' defaultValue={''}
                  onLoadStart={(val) => {
                  }} />
              </div>
              <div>
                <input style={{ marginTop: '12px' }} type={'password'} data-type="password" id='passwordinput' name="reg_passwd__" className='label' aria-required="true" aria-label="New password" onChange={(password) => {
                  setNewPassword(password.target.value);
                }}
                  pattern="^(?=.*([A-Z].*[a-z].*[\d+_%@!$*~-]|\d.*[a-z+_%@!$*~-]|[+_%@!$*~-].*[a-z\d])|[a-z].*([A-Z].*[\d+_%@!$*~-]|\d.*[A-Z+_%@!$*~-]|[+_%@!$*~-].*[A-Z\d])|\d.*([A-Z].*[a-z+_%@!$*~-]|[a-z].*[A-Z+_%@!$*~-]|[+_%@!$*~-].*[A-Za-z])|[+_%@!$*~-].*([A-Z].*[a-z\d]|[a-z].*[A-Z\d]|\d.*[A-Za-z])))(?!.*{{escapeRegExp(username)}})[\w+_%@!$*~]+$"
                  minLength={8}
                  maxLength="16"
                  placeholder='Password'
                  autoComplete="new-password"
                />
              </div>
              <div className='dob'>
                <label htmlFor='Date' id='doblabel'>Date of birth:</label>
              </div>
              <section className='datesection'>
                <select id='Date' className='date' onChange={(day) => {
                  setDate(day.target.value);
                }}>
                  <option value="">Day</option>
                  <option value="01">1</option>
                  <option value="02">2</option>
                  <option value="03">3</option>
                  <option value="04">4</option>
                  <option value="05">5</option>
                  <option value="06">6</option>
                  <option value="07">7</option>
                  <option value="08">8</option>
                  <option value="09">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="20">30</option>
                  <option value="31">31</option>
                </select>
                <select className='date' onChange={(months) => {
                  setMonth(months.target.value);
                }}>
                  <option value={""}>Month</option>
                  <option value={"01"}>1</option>
                  <option value={"02"}>2</option>
                  <option value={"03"}>3</option>
                  <option value={"04"}>4</option>
                  <option value={"05"}>5</option>
                  <option value={"06"}>6</option>
                  <option value={"07"}>7</option>
                  <option value={"08"}>8</option>
                  <option value={"09"}>9</option>
                  <option value={"10"}>10</option>
                  <option value={"11"}>11</option>
                  <option value={"12"}>12</option>
                </select>
                <select className='date' onChange={(year) => {
                  setyear(year.target.value)
                }}>
                  <option value={""}>Year</option>
                  <option value={"2022"}>2022</option>
                  <option value={"2021"}>2021</option>
                  <option value={"2020"}>2020</option>
                  <option value={"2019"}>2019</option>
                  <option value={"2019"}>2019</option>
                  <option value={"2018"}>2018</option>
                  <option value={"2017"}>2017</option>
                  <option value={"2016"}>2016</option>
                  <option value={"2015"}>2015</option>
                  <option value={"2014"}>2014</option>
                  <option value={"2013"}>2013</option>
                  <option value={"2012"}>2012</option>
                  <option value={"2011"}>2011</option>
                  <option value={"2010"}>2010</option>
                  <option value={"2009"}>2009</option>
                  <option value={"2008"}>2008</option>
                  <option value={"2007"}>2007</option>
                  <option value={"2006"}>2006</option>
                  <option value={"2005"}>2005</option>
                  <option value={"2004"}>2004</option>
                  <option value={"2003"}>2003</option>
                  <option value={"2002"}>2002</option>
                  <option value={"2001"}>2001</option>
                  <option value={"2000"}>2000</option>
                  <option value={"1999"}>1999</option>
                  <option value={"1998"}>1998</option>
                  <option value={"1997"}>1997</option>
                  <option value={"1996"}>1996</option>
                  <option value={"1995"}>1995</option>
                </select>
              </section>

              <div className={'genderdiv'} >
                <FormControl component="fieldset" className={'genderformcontrol'}>
                  <section className='genderSection'>
                    {/* <FormLabel component="legend" className='genderlaber'>Gender</FormLabel> */}
                    <label className='genderlaber'>Gender:</label>
                  </section>
                  <section>
                    <RadioGroup
                      aria-label="gender"
                      name="gender1"
                      className={'classesofradio'}
                      value={gender}
                    >
                      <div className='divgenderview'>
                        <section className='sectionGenderLabel'>
                          <FormControlLabel
                            value="female"
                            control={<Radio onClick={handleClick} size='small' style={{ marginLeft: '35%' }} />}
                            label="Female"
                            labelPlacement="start"
                          />
                        </section>
                        <section className='sectionGenderLabelMAle'>
                          {/* </div> */}
                          <FormControlLabel
                            value="male"
                            control={<Radio onClick={handleClick} size='small' style={{ marginLeft: '45%' }} />}
                            label="Male"
                            labelPlacement="start"
                            className='malelabel'
                          />
                        </section>
                        <section className='sectionGenderLabel'>
                          <FormControlLabel
                            value="custom"
                            control={<Radio onClick={handleClick} size='small' style={{ marginLeft: '35%' }} />}
                            label="Custom"
                            labelPlacement="start"
                          />
                        </section>
                      </div>
                    </RadioGroup>
                  </section>
                </FormControl>
              </div>
              <div className='imageField'>
                <input type={'file'} onChange={(e) => {
                  setImage(e.target.value);
                }} className="imageInputField"></input>
              </div>
              <div className='signUpDiv'>
                <button onClick={submitReview} type='submit' className='buttonSubmit'>submit</button>
              </div>

              <section className='alreadyHaveAccount'>
                <a href='/' target={'_self'} className='alreadyHaveAccount1' id='alreadyHaveAccount'>
                  <p>
                    Already have an account? Log-in.
                  </p>
                </a>
              </section>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SignUp;
