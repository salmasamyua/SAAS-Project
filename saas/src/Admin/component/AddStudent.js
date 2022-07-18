import React, {useState} from 'react';
import "../CSS/component.css";
import axios from 'axios';

export default function AddStudent() {
 
  const userjwt = localStorage['token'];
  
  const [SSN, setSSN] = useState("");
  const [name, setName] = useState("");
  const [nameArabic, setNameArabic] = useState("");
  const [gender, setGender] = useState("male");
  const [birthday, setBirthday] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [prevQualification, setPrevQualification] = useState("");
  const [prevInstitute, setPrevInstitute] = useState("");
  const [prevDegree, setPrevDegree] = useState("");
  const [precentDegree, setPrecentDegree] = useState("");
  const [acceptYear, setAcceptYear] = useState("");
  const [graduYear, setGraduYear] = useState("");
  const [semester, setSemester] = useState("1");
  const [department, setDepartment] = useState("SWE");
  const [email, setEmail] = useState("");
  const [emailConfirmed, setEmailConfirmed] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmed, setPasswordConfirmed] = useState("");

  const handleAddStudent = async (e) => {
    e.preventDefault();
    //console.log(SSN, name, nameArabic, gender, birthday, phoneNumber, semester, email, department, password, city, address, precentDegree, prevDegree, prevInstitute, prevQualification, acceptYear)
    axios({
      method: "POST",
      url: "http://saasproject-001-site1.itempurl.com/api/Users/CreateStudent",
      data: {
          ssn: SSN,
          name: name,
          nameArb: nameArabic,
          brithOfdate: birthday,
          semester: semester,
          gender: gender,
          email: email,
          emailConfirmed: emailConfirmed,
          phoneNumber: phoneNumber,
          password: password,
          passwordConfirmed: passwordConfirmed,
          city: city,
          address: address,
          previousQualification: prevQualification,
          institute: prevInstitute,
          graduationYear: graduYear,
          acceptenceYear: acceptYear,
          department: department,
          total: prevDegree,
          percentage: precentDegree
      },headers: {
          Authorization : `Bearer ${userjwt}`,
           'Accept': 'application/json',
           'Content-Type': 'application/json'
      }
    }).then(res => {
      if (res.status === 200) {
            alert("Student created successfully");
          } else {
            console.log("Some error occured", res);
          }
    }).catch((err) => alert(err));
  };

  return (
    <div>
        <a href='/admin' id="profileHeader">
          <div id="profile"></div>
        </a>
        <section id='addStudents'>
        <div className='container'>
              <a href='/admin'><i className="bi bi-arrow-left"></i> Add Student</a>
              <form>
                <label htmlFor="SSNStudent">Enter student SSN:</label>
                <input value={SSN} onChange={(e) => setSSN(e.target.value)} type="text" id="SSNStudent" maxLength="14" name="SSNStudent" required />
                <label htmlFor="nameStudentEnglish">Enter student name (English):</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" id="nameStudentEnglish" name="nameStudentEnglish" required />
                <label htmlFor="nameStudentArabic">Enter student name (Arabic):</label>
                <input value={nameArabic} onChange={(e) => setNameArabic(e.target.value)} type="text" id="nameStudentArabic" name="nameStudentArabic" required />
                <label htmlFor="genderStudent">choose the gender of the student:</label>
                <select value={gender} onChange={(e) => setGender(e.target.value)} name="genderStudent" id="genderStudent" required>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                <label htmlFor="birthdayStudent">Enter student birth of date (in style dd-mm-yyyy):</label>
                <input value={birthday} onChange={(e) => setBirthday(e.target.value)} type="date" id="birthday" name="trip-start" required />
                <label htmlFor="phoneStudent">Enter Student phone number:</label>
                <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type="text" id="phoneStudent" name="phoneStudent" maxLength="11" required />
                <label htmlFor="cityStudent">Enter Student city:</label>
                <input value={city} onChange={(e) => setCity(e.target.value)} type="text" id="cityStudent" name="cityStudent" required />
                <label htmlFor="addressStudent">Enter Student address:</label>
                <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" id="addressStudent" name="addressStudent" required />
                <label htmlFor="qualiStudent">Enter Student previous qualification:</label>
                <input value={prevQualification} onChange={(e) => setPrevQualification(e.target.value)} type="text" id="qualiStudent" name="qualiStudent" required />
                <label htmlFor="instiStudent">Enter Student previous institute:</label>
                <input value={prevInstitute} onChange={(e) => setPrevInstitute(e.target.value)} type="text" id="instiStudent" name="istiStudent" required />
                <label htmlFor="totaldegreeStudent">Enter Student previous total degree:</label>
                <input value={prevDegree} onChange={(e) => setPrevDegree(e.target.value)} type="text" id="totaldegreeStudent" name="totaldegreeStudent" required />
                <label htmlFor="precentageStudent">Enter the precentage of the previous total degree:</label>
                <input value={precentDegree} onChange={(e) => setPrecentDegree(e.target.value)} type="text" id="precentageStudent" name="precentageStudent" required />
                <label htmlFor="acceptStudent">Enter the acceptence year of the student:</label>
                <input value={acceptYear} onChange={(e) => setAcceptYear(e.target.value)} type="text" id="acceptStudent" name="acceptStudent" required />
                <label htmlFor="graduStudent">Enter the expected graduation year of the student:</label>
                <input value={graduYear} onChange={(e) => setGraduYear(e.target.value)} type="number" id="graduStudent" name="graduStudent" required />
                <label htmlFor="semester">Choose the semester of the student:</label>
                <select value={semester} onChange={(e) => setSemester(e.target.value)} name="semester" id="semester" required>
                  <option value="1">Semester 1</option>
                  <option value="2">Semester 2</option>
                  <option value="3">Semester 3</option>
                  <option value="4">Semester 4</option>
                  <option value="5">Semester 5</option>
                  <option value="6">Semester 6</option>
                  <option value="7">Semester 7</option>
                  <option value="8">Semester 8</option>
                </select>
                <label htmlFor="depart">Choose the department of the student:</label>
                <select value={department} onChange={(e) => setDepartment(e.target.value)} name="depart" id="depart" required>
                  <option value="SWE">SWE</option>
                  <option value="BIO">BIO</option>
                  <option value="CS">CS</option>
                  <option value="IS">IS</option>
                  <option value="IT">IT</option>
                </select>
                <label htmlFor="emailStudent">Enter student e-mail:</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" id="emailStudent" name="emailStudent" required />
                <label htmlFor="emailConfirmStudent">Enter student e-mail confirme:</label>
                <input value={emailConfirmed} onChange={(e) => setEmailConfirmed(e.target.value)} type="text" id="emailConfirmStudent" name="emailConfirmStudent" required />
                <label htmlFor="passwordStudent">Enter temporary password:</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="passwordStudent" name="passwordStudent" required />
                <label htmlFor="passwordConfirmStudent">Enter temporary password confirme:</label>
                <input value={passwordConfirmed} onChange={(e) => setPasswordConfirmed(e.target.value)} type="password" id="passwordConfirmStudent" name="passwordConfirmStudent" required />
                <button type="button" id="addStudent"  onClick={handleAddStudent}>Add</button>
              </form>
            </div>
        </section>
    </div>
  )
}
