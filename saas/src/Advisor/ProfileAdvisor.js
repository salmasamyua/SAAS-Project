import React, {useEffect, useState} from 'react'
import './AdvisorCSS/styleProfile.css'
import Nav from './Nav';

export default function ProfileAdvisor() {
    const userjwt = localStorage['token'];
    const gender = localStorage['gender'];
    const [profile, setProfile] = useState("");
    const [profilePic, setProfilePic] = useState("");
  useEffect(() => {
    document.title = 'SAAS | Profile';
          if(gender === "female"){
            setProfilePic("../Images/profile.jpeg")
        }
        else{
            setProfilePic("../Images/profilemale.jpg")
        }
    fetch('http://saasproject-001-site1.itempurl.com/api/Acount/GetCurrentUser', {
        method: "Get",
        headers:{
          Authorization : `Bearer ${userjwt}`,
           'Accept': 'application/json',
           'Content-Type': 'application/json'
        }})
        .then((response) => response.json())
        .then((data) => {
          setProfile(data)
        }
        );
  }, [gender, userjwt] );
  return (
    <div>
        <section className='sectionProfile'>
            <Nav/>
            <div className="row">
                <div className="col-xl-3 col-sm-12">
                    <div className="colAdvisor0">
                        <div className="profileAdvisor" style={{backgroundImage: `url('${profilePic}')`}}></div>
                    <h4>{profile.name}</h4>
                    <p>{profile.email}</p>
                    </div>
                </div>
                <div className="col-xl-8 col-md-10 col-sm-11 colAdvisor1">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Personal Information
                        </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        <table>
                            <tbody>
                                <tr>
                                <th>Name</th>
                                <td>{profile.name}</td>
                                </tr>
                                <tr>
                                    <th>Name - Arabic</th>
                                    <td>{profile.nameArb}</td>
                                </tr>
                                <tr>
                                    <th>National ID</th>
                                    <td>{profile.id}</td>
                                </tr>
                                <tr>
                                    <th>Gender</th>
                                    <td>{profile.gender}</td>
                                </tr>
                                <tr>
                                    <th>Birthday</th>
                                    <td>{profile.brithOfdate}</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                        </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Contact Information
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <table>
                                <tbody>
                                    <tr>
                                        <th>City</th>
                                        <td>{profile.city}</td>
                                    </tr>
                                    <tr>
                                        <th>Address</th>
                                        <td>{profile.address}</td>
                                    </tr>
                                    <tr>
                                        <th>Mobile</th>
                                        <td>{profile.phoneNumber}</td>
                                    </tr>
                                    <tr>
                                        <th>Email</th>
                                        <td>{profile.email}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                </div>
              </div>
            </div>
        </section>
    </div>
  )
}
