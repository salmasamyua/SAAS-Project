import React, {useState} from 'react'
import '../CSS/styleHome.css';

 function Setting() {

    const [password, setPassword] = useState(false);
    const handlePassword= () => {
        setPassword(current => !current);
    }
    const [phone, setPhone] = useState(false);
    const handlePhone = () => {
        setPhone(current => !current);
    }
  return (
    <div>
        

        {/* <!-- Modal --> */}
        <div className="modal fade animate" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Setting</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <div id="content">
                    <button id="psw" onClick={handlePassword}
                        ><i className="bi bi-lock-fill"></i> Password
                        <i className="bi bi-caret-right"></i
                    ></button>
                    {password && (
                         <div>
                            <form className="form1" method="post">
                                <label htmlFor="password">Enter Your Old Password:</label>
                                <input
                                    type="password"
                                    id="oldPassword"
                                    name="password"
                                    title="Old password"
                                    required
                                />
                    
                                <label htmlFor="newPassword">Enter a New Password:</label>
                                <input
                                    type="password"
                                    id="newPassword"
                                    name="newPassword"
                                    title="New password"
                                    required
                                />
                    
                                <label htmlFor="confirmPassword">Confirm the New Password:</label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    title="Confirm password"
                                    required
                                />
                    
                                <p className="form-actions text-center">
                                    <input type="submit" value="Save Changes" title="Change password" />
                                </p>
                            </form>
                         </div>
                    )}
                    <button id="phone" onClick={handlePhone}
                        ><i className="bi bi-phone"></i> Phone Number
                        <i className="bi bi-caret-right"></i
                    ></button>
                    {phone && (
                        <div>
                            <form className="form2" method="post">
                                    <label htmlFor="newPhone">Enter Your Phone Number:</label>
                                    <input
                                        type="text"
                                        id="newPhone"
                                        name="newPhone"
                                        title="New Phone"
                                        required
                                    />
                        
                                    <label htmlFor="code"
                                        >Enter the code sent to you to verify your number:</label
                                    >
                                    <input
                                        type="text"
                                        id="Phone code"
                                        name="code"
                                        title="Phone Code"
                                        required
                                    />
                        
                                    <p className="form-actions text-center">
                                        <input type="submit" value="Save Changes" title="Phone" />
                                    </p>
                                    </form>
                        </div>
                    )}
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Setting;