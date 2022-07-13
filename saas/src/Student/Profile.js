import React, { useEffect } from 'react';
import '../CSS/styleProfile.css';

 function Profile() {
  useEffect(() => {
    document.title = 'SAAS | Profile';
  });
    return (
      <div>
          <section className='sectionProfile'>
          <div className="row">
              <div className="col-xl-3 col-sm-12">
                  <div className="colProfile0">
                      <div className="profile"></div>
                  <h4>Salma Samy Mansour</h4>
                  <p>UGS.140537@ci.suez.edu.eg</p>
                  </div>
              </div>
              <div className="col-xl-8 col-md-10 col-sm-11 colProfile1">
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
                                <td>Salma Samy Mansour Ali</td>
                            </tr>
                            <tr>
                                <th>Name - Arabic</th>
                                <td>سلمى سامي منصور علي</td>
                            </tr>
                            <tr>
                                <th>National ID</th>
                                <td>30008161301464</td>
                            </tr>
                            <tr>
                                <th>Gender</th>
                                <td>Female</td>
                            </tr>
                            <tr>
                                <th>Birthday</th>
                                <td>16\8\2000</td>
                            </tr>
                            <tr>
                                <th>Acceptence Year</th>
                                <td>2018 - 2019</td>
                            </tr>
                            <tr>
                                <th>Level</th>
                                <td>Fourth</td>
                            </tr>
                            <tr>
                                <th>Department</th>
                                <td>Computer Science</td>
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
                                    <td>Sharqia</td>
                                </tr>
                                <tr>
                                    <th>Address</th>
                                    <td>Abu Kabir</td>
                                </tr>
                                <tr>
                                    <th>Mobile</th>
                                    <td>01145735097</td>
                                </tr>
                                <tr>
                                    <th>Email</th>
                                    <td>salmasamymansour0@gmail.com</td>
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

export default Profile;