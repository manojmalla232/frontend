
import React, { useState } from 'react';
import axios from 'axios';

const CompanyManagement = () => {
  const [name, setName] = useState('');
  const [reviewLink, setReviewLink] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleAddCompany = async () => {
    try {
      const response = await axios.post('https://your-backend-url.vercel.app/api/company/add', {
        name,
        reviewLink,
        username,
        password,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input type="text" value={reviewLink} onChange={(e) => setReviewLink(e.target.value)} placeholder="Review Link" />
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleAddCompany}>Add Company</button>
    </div>
  );
};

export default CompanyManagement;
