import React, { useEffect, useState } from 'react';
import './Dashboard.css';

function Dashboard() {
  const [userData, setUserData] = useState({});
  const [rewards, setRewards] = useState([]);

  useEffect(() => {
    fetch("https://simpleinterndashboard.onrender.com/user-data")
      .then(res => res.json())
      .then(data => setUserData(data));

    fetch("https://simpleinterndashboard.onrender.com/rewards")
      .then(res => res.json())
      .then(data => setRewards(data));
  }, []);

  return (
    <div className="dashboard">
      <h1>Welcome, {userData.name}</h1>
      <div className="info">
        <p><strong>Referral Code:</strong> {userData.referralCode}</p>
        <p><strong>Total Donations:</strong> ₹{userData.donationsRaised}</p>
      </div>

      <h2>Rewards</h2>
      <div className="rewards">
        {rewards.map((reward, index) => (
          <div key={index} className="reward-card">
            <h3>{reward.title}</h3>
            <p>Unlock at ₹{reward.unlockAt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
