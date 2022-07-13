import React, {useState} from 'react';
import "../CSS/admin.css";


export default function AddAdvisor() {
  window.onscroll = function () {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.querySelector("#name").style.display = "none";
      document.querySelector("#email").style.display = "none";
      document.querySelector("#profile").style.cssText = `
                padding: 10px;
                height: 100px;
                background-image: none;
                background-color: #064B68;
                z-index: 2;
                `;
      document.querySelector("#profilePhoto").style.cssText = `
                width: 70px;
                height: 70px; 
                `;
      document.querySelector("header").style.marginBottom = "150px";
      document.querySelector("#add").style.marginTop = "-150px";
    }
  }; 
  const userjwt = localStorage['token'];
  
    const [SSN, setSSN] = useState("");
    const [name, setName] = useState("");
    const [nameArabic, setNameArabic] = useState("");
    const [gender, setGender] = useState("");
    const [birthday, setBirthday] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [level, setLevel] = useState("1");
    const [email, setEmail] = useState("");
    const [emailConfirmed, setEmailConfirmed] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmed, setPasswordConfirmed] = useState("");
  
    const handleAddAdvisor = async (e) => {
      e.preventDefault();
      console.log(SSN, name, nameArabic, gender, birthday, phoneNumber, level, email, emailConfirmed, password, passwordConfirmed)
      try {
        let res = await fetch("http://saasproject-001-site1.itempurl.com/api/Users/CreateAdvisor", {
          method: "POST",
          body: JSON.stringify({
            brithOfdate: "2021-01-29",
            email: email,
            emailConfirmed: emailConfirmed,
            gender: gender,
            level: level,
            name: name,
            nameArb: nameArabic,
            password: password,
            passwordConfirmed: passwordConfirmed,
            phoneNumber: phoneNumber,
            ssn: SSN
            // brithOfdate: "2021-01-29",
            // email: "salmasloma33@gmail.com",
            // emailConfirmed: "salmasloma33@gmail.com",
            // gender: "female",
            // level: "1",
            // name: "salma",
            // nameArb: "سلمى",
            // password: "11Salma00@",
            // passwordConfirmed: "11Salma00@",
            // phoneNumber: "01123445677",
            // ssn: "30004140300228"
          }),
          headers:{
            Authorization : `Bearer ${userjwt}`,
             'Accept': 'application/json',
             'Content-Type': 'application/json'
          }
        });
        if (res.status === 200) {
          setSSN("");
          setName("");
          setNameArabic("");
          setGender("");
          setBirthday("");
          setPhoneNumber("");
          setLevel("");
          setEmail("");
          setEmailConfirmed('');
          setPassword("");
          setPasswordConfirmed('');
          alert("Advisor created successfully");
        } else {
          console.log("Some error occured");
        }
      } catch (err) {
        console.log(err.response);
      }
    };
    
  return (
    <div>
        <header>
           <a href='/admin' id="profile">
               <div id="profilePhoto"></div>
               <h4 id="name">Mohamed Ahmed Ali</h4>
               <p id="email">MAA@ci.suez.edu.eg</p>
           </a>
       </header>
        <section id='add'>
        <div className='container'>
                <a href='/admin'><i className="bi bi-arrow-left"></i> Add Advisor</a>
                <form>
                  <label htmlFor="SSN">Enter advisor SSN:</label>
                  <input value={SSN} onChange={(e) => setSSN(e.target.value)} type="text" id="SSN" name="SSN" required />
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
                  <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type="text" id="phone" name="phone" required />
                  <label htmlFor="level">choose the level which the advisor is responsible:</label>
                  <select name="level" id="level" onChange={(e) => setLevel(e.target.value)} value={level}>
                    <option value="1">Level 1</option>
                    <option value="2">Level 2</option>
                    <option value="3">Level 3</option>
                    <option value="4">Level 4</option>
                  </select>
                  <label htmlFor="email">Enter advisor e-mail:</label>
                  <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" id="email" name="email" required />
                  <label htmlFor="password">Enter temporary password:</label>
                  <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" required />
                  <label htmlFor="emailConfirmed">Enter advisor e-mail:</label>
                  <input value={emailConfirmed} onChange={(e) => setEmailConfirmed(e.target.value)} type="text" id="emailConfirmed" name="emailConfirmed" required />
                  <label htmlFor="password">Enter temporary password:</label>
                  <input value={passwordConfirmed} onChange={(e) => setPasswordConfirmed(e.target.value)} type="password" id="passwordConfirmed" name="passwordConfirmed" required />
                  <button type="button" id="addbtn" onClick={handleAddAdvisor}>Add</button>
                </form>
         </div>
        </section>
    </div>
  )
}
