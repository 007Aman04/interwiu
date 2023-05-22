import React from 'react'
import { useState } from 'react'

const AddUser = () => {
    const [user, setUser] = useState({firstName:"", lastName:"", email:"", mobileNumber:"", gender : "", availableOn1:"", availableOn2:"", company:"", graduatedFrom:"", profilePicture : "", resume:""})

    const onChange = (e)=>{
        setUser({...user, [e.target.name] : e.target.value})
        console.log(user)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:3001/adduser", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
          });
        const json = await response.json();
        console.log(json);
    }

    return (
        <>
            <div className='container my-5'>
                <h1>Add a new user</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label for="firstName" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="firstName" name='firstName' value={user.firstName} required onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label for="lastName" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="lastName" name='lastName' value={user.lastName} required onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" name='email' value={user.email} required onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label for="mobileNumber" className="form-label">Mobile Number</label>
                        <input type="tel" className="form-control" id="mobileNumber" name='mobileNumber' value={user.mobileNumber} required onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label for="gender" className="form-label">Gender</label>
                        <select className="form-select" id="gender" name='gender' value={user.gender} required onChange={onChange}>
                            <option value="" selected disabled>Select Gender</option>
                            <option value="male">Male</option> /
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label for="availableOn1" className="form-label">Available On First Day</label>
                        <input type="date" className="form-control" id="availableOn1" name='availableOn1' value={user.availableOn1} required onChange={onChange}/>
                    </div>
                    <div className="mb-3">
                        <label for="availableOn2" className="form-label">Available On Second Day</label>
                        <input type="date" className="form-control" id="availableOn2" name='availableOn2' value={user.availableOn2} required onChange={onChange}/>
                    </div>
                    <div className="mb-3">
                        <label for="company" className="form-label">Company/Organization</label>
                        <input type="text" className="form-control" id="company" name='company' value={user.company} required onChange={onChange}/>
                    </div>
                    <div className="mb-3">
                        <label for="graduatedFrom" className="form-label">Graduated From</label>
                        <select className="form-select" id="graduatedFrom" name='graduatedFrom' value={user.graduatedFrom} required onChange={onChange}>
                            <option value="" selected disabled>Select Institution</option>
                            <option value="IIT Delhi">IIT Delhi</option>
                            <option value="IIT Kanpur">IIT Kanpur</option>
                            <option value="IIT Madras">IIT Madras</option>
                            <option value="IIT Kharagpur">IIT Kharagpur</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label for="profilePicture" className="form-label">Upload Profile Picture</label>
                        <input type="file" className="form-control" id="profilePicture" name='profilePicture' value={user.profilePicture} onChange={onChange}/>
                    </div>
                    <div className="mb-3">
                        <label for="resume" className="form-label">Upload Resume (PDF only)</label>
                        <input type="file" className="form-control" id="resume" accept=".pdf" name='resume' value={user.resume} required onChange={onChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default AddUser