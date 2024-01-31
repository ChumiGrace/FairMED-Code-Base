import React, { useEffect } from 'react';
import './Profile.css';
import Placeholder from '../Assets/placeholder.png';
import { useState } from 'react';



const Profile = ({user}) => {
  const ProfileSection = ({acc}) => {
    const [isBordered, setIsBordered] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [user, setUser] = useState({
      name: '',
      email: '',
      phone: '',
      password: ''
    })
    

    const [data, setData] = useState({});
  const id = localStorage.getItem("id");
  const token = localStorage.getItem("access_token");
  const url = `http://127.0.0.1:8000/${acc}/${id}/`;
  const update_url = `http://127.0.0.1:8000/${acc}/${id}/`

  useEffect(()=>{

    const fetchData = async () => {
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      } else {
        const data = await res.json();
        setData({ ...data, 'userData':data });
      }
    };

    fetchData()
  }, [token, url])

  const UpdataUser = async () => {
    const res = await fetch(update_url, {
      method: 'PUT',
      headers: {
        'Content-Type':'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(user)
    })
    if (!res.ok){
      throw new Error(`HTTP Error! Status: ${res.status}`)
    } else {
      console.log(await res.json())
    }
  }

  useEffect(() => {
    setUser({
      name: data['name'],
      email: data['email'],
      phone: data['phone']
    })
  }, [data]);
  
    const toggleEditability = () => {
      setIsBordered((prevState) => !prevState);
      setPasswordVisible(false);
    };
  
    const togglePasswordVisibility = () => {
      setPasswordVisible((prevVisible) => !prevVisible);
    };
  
    const handleChange = (e) => {
      const {name, value} = e.target
      setUser({ 
        ...user, 
        [name]: value});
    };
  
    const saveChanges = () => {
      UpdataUser()
      setIsBordered(false);
    };

    console.log(user)
  
    return (
      <div className={`profile-section${isBordered ? ' bordered' : ''}`} id="profile-section">
        <div className='p-4'>
        <label htmlFor="name" className='lable-label text-primary'>Name</label><br />
        {isBordered ? (
          <input type="text" name='name' value={user.name} onChange={handleChange} className="form-control" />
        ) : (
          <span id="name">{user.name}</span>
        )}
        <br />
        <br />
  
        <label htmlFor="email" className='text-primary'>Email</label><br />
        {isBordered ? (
          <input type="text" name='email' value={user.email} onChange={handleChange} className="form-control" />
        ) : (
          <span id="email">{user.email}</span>
        )}
        <br />
        <br />
  
        <label htmlFor="phone" className='text-primary'>Phone Number</label><br />
        {isBordered ? (
          <input type="text" name='phone' value={user.phone} onChange={handleChange} className="form-control" />
        ) : (
          <span id="phone">{user.phone}</span>
        )}
        <br />
        <br />
  
        <label htmlFor="password" className='text-primary'>Password</label><br />
        {isBordered ? (
          <input
            type={passwordVisible ? 'text' : 'password'}
            value={user.password}
            onChange={handleChange}
            className="form-control"
          />
        ) : (
          <span id="password">{user.password}</span>
        )}
        <i
          className={`bx ${passwordVisible ? 'bx-lock-open-alt' : 'bx-lock-alt'}`}
          id="password-toggle"
          onClick={togglePasswordVisibility}
        ></i>
        </div>  
        <hr className='m-3'/>
        <div className='text-center p-2'>
        {isBordered ? (
          <button
            className="update-profile-btn btn btn-success"
            type="button"
            onClick={saveChanges}
          >
            Save Changes
          </button>
        ) : (
          <button
            className="update-profile-btn btn btn-success"
            type="button"
            onClick={toggleEditability}
          >
            Update Profile
          </button>
        )}
        </div>
      </div>
    );
  };

  return (
    <div className="">
      <div className="my-profile p-5">
      <div className="card card-user">
  <div className="image">
    <img src={Placeholder} alt="..." />
  </div>
  <div className="content">
    <div className="dashboard-user">
      <img
        className="avatar border-white"
        src={Placeholder}
        alt="..."
      />
      <h4 className="title">
        John Doe
      </h4>
    </div>
    <div className='text-center'>
    <button className="avatar-choice text-center btn btn-outline-dark">
      change your avatar
    </button>
    </div>

    <div>
    <ProfileSection acc={user}/>
    </div>
  </div>
</div>


        
      </div>
    </div>
  );
};

export default Profile;
