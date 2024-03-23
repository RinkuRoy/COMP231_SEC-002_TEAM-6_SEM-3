import React, { useState } from 'react';

const AccountSettings = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (Update user account settings)
    console.log('Updating account settings...');
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Account Settings</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="tel" id="phoneNumber" value={phoneNumber} onChange={handlePhoneNumberChange} />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default AccountSettings;
