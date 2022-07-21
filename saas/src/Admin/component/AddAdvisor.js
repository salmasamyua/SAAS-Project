import React, {useState} from 'react';
import "../CSS/component.css";


export default function AddAdvisor() {

  const userjwt = localStorage['token'];
  
    const [SSN, setSSN] = useState("");
    const [name, setName] = useState("");
    const [nameArabic, setNameArabic] = useState("");
    const [gender, setGender] = useState("male");
    const [birthday, setBirthday] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [level, setLevel] = useState("1");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmed, setEmailConfirmed] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmed, setPasswordConfirmed] = useState("");
  
    const handleAddAdvisor = async (e) => {
      e.preventDefault();
      //console.log(SSN, name, nameArabic, gender, birthday, phoneNumber, level, email, emailConfirmed, password, passwordConfirmed)
      try {
        let res = await fetch("http://saasproject-001-site1.itempurl.com/api/Users/CreateAdvisor", {
          method: "POST",
          body: JSON.stringify({
            brithOfdate: birthday,
            email: email,
            emailConfirmed: emailConfirmed,
            gender: gender,
            level: level,
            city: city,
            Address: address,
            name: name,
            nameArb: nameArabic,
            password: password,
            passwordConfirmed: passwordConfirmed,
            phoneNumber: phoneNumber,
            ssn: SSN
          }),
          headers:{
            Authorization : `Bearer ${userjwt}`,
             'Accept': 'application/json',
             'Content-Type': 'application/json'
          }
        });
        if (res.status === 200) {
          alert("Advisor created successfully");
        } else if(res.status === 400){
          alert("One or more validation errors occurred.");
        }
        else {
          console.log("Some error occured", res);
        }
      } catch (err) {
        console.log(err.response);
      }
    };
    
  return (
    <div>
        <a href='/admin' id="profileHeader">
            <div id="profile"></div>
        </a>
        <section id='add'>
        <div className='container'>
                <a href='/admin'><i className="bi bi-arrow-left"></i> Add Advisor</a>
                <form>
                  <label htmlFor="SSN">Enter advisor SSN:</label>
                  <input value={SSN} onChange={(e) => setSSN(e.target.value)} maxLength='14' type="text" id="SSN" name="SSN" required />
                  <label htmlFor="nameEnglish">Enter advisor name (English):</label>
                  <input value={name} onChange={(e) => setName(e.target.value)} type="text" id="nameEnglish" name="nameEnglish" required />
                  <label htmlFor="nameArabic">Enter advisor name (Arabic):</label>
                  <input value={nameArabic} onChange={(e) => setNameArabic(e.target.value)} type="text" id="nameArabic" name="nameArabic" required />
                  <label htmlFor="gender">choose the gender of the advisor:</label>
                  <select name="gender" id="gender" onChange={(e) => setGender(e.target.value)} value={gender}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  <label htmlFor="birthday">Enter advisor birth of date (in style dd-mm-yyyy):</label>
                  <input value={birthday} onChange={(e) => setBirthday(e.target.value)} type="date" id="birthday" name="trip-start"  />
                  <label htmlFor="phone">Enter advisor phone number:</label>
                  <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} maxLength="11" type="text" id="phone" name="phone" required />
                  <label htmlFor="level">choose the level which the advisor is responsible:</label>
                  <select name="level" id="level" onChange={(e) => setLevel(e.target.value)} value={level}>
                    <option value="1">Level 1</option>
                    <option value="2">Level 2</option>
                    <option value="3">Level 3</option>
                    <option value="4">Level 4</option>
                  </select>
                  <label htmlFor="city">Enter advisor city:</label>
                  <input value={city} onChange={(e) => setCity(e.target.value)} type="text" id="city" name="city" required />
                  <label htmlFor="address">Enter advisor address:</label>
                  <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" id="address" name="address" required />
                  <label htmlFor="email">Enter advisor e-mail:</label>
                  <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" id="email" name="email" required />
                  <label htmlFor="emailConfirmed">Enter advisor e-mail confirme:</label>
                  <input value={emailConfirmed} onChange={(e) => setEmailConfirmed(e.target.value)} type="text" id="emailConfirmed" name="emailConfirmed" required />
                  <label htmlFor="password">Enter temporary password:</label>
                  <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" required />
                  <label htmlFor="password">Enter temporary password confirme:</label>
                  <input value={passwordConfirmed} onChange={(e) => setPasswordConfirmed(e.target.value)} type="password" id="passwordConfirmed" name="passwordConfirmed" required />
                  <button onClick={handleAddAdvisor} type="button" id="addbtn">Add</button>
                </form>
         </div>
        </section>
    </div>
  )
}
