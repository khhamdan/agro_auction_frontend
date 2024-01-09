import React, { useEffect, useState } from 'react';
import { Tabs, Input, Button, Modal } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { updateProfile } from '../../../Http/api';
import Swal from 'sweetalert2';
const { TabPane } = Tabs;

const VerticalTabs = () => {
  const { id } = useParams();
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [cnic, setCnic] = useState('3450167891011');
  const [location, setLocation] = useState('New York');
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const submitForm = async () => {
    const user = {
      username: name,
      email,
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
      localStorage.setItem('user', JSON.stringify(user));
    });
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log('user', user);

    if (user) {
      setName(user.username);
      setEmail(user.email);
    } else {
      navigate('/signin');
    }
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

          <button className="landing-box-button" onClick={submitForm}>
            Edit
          </button>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default VerticalTabs;
