import React, {useEffect} from 'react'
import './AdvisorCSS/styleProfile.css'

export default function ProfileAdvisor() {
    useEffect(() => {
        document.title = 'SAAS | Profile';
      });
  return (
    <div>
        <section className='sectionProfile'>
            <div className="row">
                <div className="col-xl-3 col-sm-12">
                    <div className="colAdvisor0">
                        <div className="profileAdvisor"></div>
                    <h4>Ahmed Foad Mohamed</h4>
                    <p>af@ci.suez.edu.eg</p>
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
                                <td>Ahmed Foad Mohamed</td>
                                </tr>
                                <tr>
                                    <th>Name - Arabic</th>
                                    <td>احمد فؤاد محمد</td>
                                </tr>
                                <tr>
                                    <th>National ID</th>
                                    <td>12345678901234</td>
                                </tr>
                                <tr>
                                    <th>Gender</th>
                                    <td>Male</td>
                                </tr>
                                <tr>
                                    <th>Birthday</th>
                                    <td>10\5\1975</td>
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
                                        <td>Ismailia</td>
                                    </tr>
                                    <tr>
                                        <th>Address</th>
                                        <td>Al-Ashrini</td>
                                    </tr>
                                    <tr>
                                        <th>Mobile</th>
                                        <td>01112345678</td>
                                    </tr>
                                    <tr>
                                        <th>Email</th>
                                        <td>ahmedfoad@gmail.com</td>
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
