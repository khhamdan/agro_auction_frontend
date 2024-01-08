import React, { useEffect, useState } from 'react';
import { Tabs, Input, Button, Modal } from 'antd';
import { useParams } from 'react-router-dom';
import { updateProfile } from '../../../Http/api';
import Swal from 'sweetalert2';
const { TabPane } = Tabs;

const VerticalTabs = () => {
  const { id } = useParams();
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [cnic, setCnic] = useState('3450167891011');
  const [location, setLocation] = useState('New York');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCnicChange = (e) => {
    const newCnic = e.target.value;
    // Remove non-numeric characters
    const numericCnic = newCnic.replace(/[^0-9]/g, '');

    // Ensure the CNIC has at most 13 digits
    if (numericCnic.length <= 13) {
      setCnic(numericCnic);
    }
  };

  const handleLocationChange = (e) => {
    const locationRegex = /^[a-zA-Z\s]+$/;
    const newLocation = e.target.value;

    if (newLocation === '' || locationRegex.test(newLocation)) {
      setLocation(newLocation);
    }
  };

  const submitForm = async () => {
    const user = {
      username: name,
      email,
      cnic,
      location,
    };

    await updateProfile(id, user).then((res) => {
      Swal.fire({
        title: 'Success',
        text: 'Profile Updated Successfully',
        icon: 'success',
        confirmButtonText: 'Ok',
      });
      let user = JSON.parse(localStorage.getItem('user'));
      user.username = name;
      user.cnic = cnic;
      user.location = location;
      localStorage.setItem('user', JSON.stringify(user));
    });
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setName(user.username);
    setEmail(user.email);
    setCnic(user.cnic);
    setLocation(user.location);
  }, []);

  return (
    <div
      style={{
        paddingTop: '5%',
        paddingBottom: '5%',
        width: '350px',
      }}
    >
      <Tabs tabPosition="top">
        <TabPane tab="Profile" key="1">
          <div>
            <h2>Name</h2>
            <Input value={name} disabled />
          </div>
          <div>
            <h2>Email</h2>
            <Input value={email} disabled />
          </div>
          <div>
            <h2>CNIC</h2>
            <Input value={cnic} disabled />
          </div>
          <div>
            <h2>Location</h2>
            <Input value={location} disabled />
          </div>
        </TabPane>
        <TabPane tab="Edit Profile" key="2">
          <div>
            <h2>Name</h2>
            <Input
              value={name}
              onChange={handleNameChange}
              placeholder="user_abc"
            />
          </div>
          <div>
            <h2>Email</h2>
            <Input value={email} disabled />
          </div>
          <div>
            <h2>CNIC</h2>
            <Input
              value={cnic}
              onChange={handleCnicChange}
              // placeholder="12345-6789101-1"
            />
          </div>
          <div>
            <h2>Location</h2>
            <Input
              value={location}
              onChange={handleLocationChange}
              placeholder="lahore"
            />
          </div>
          <button className="landing-box-button" onClick={submitForm}>
            Edit
          </button>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default VerticalTabs;
