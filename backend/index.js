const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 'https://simpleinterndashboard.onrender.com';

app.use(cors());

const userData = {
  name: "Darsh Salunke",
  referralCode: "darsh2025",
  donationsRaised: 12500
};

// Dummy rewards
const rewards = [
  { title: "T-Shirt", unlockAt: 5000 },
  { title: "Badge", unlockAt: 10000 },
  { title: "Certificate", unlockAt: 20000 }
];

// Routes
app.get('/user-data', (req, res) => {
  res.json(userData);
});

app.get('/rewards', (req, res) => {
  res.json(rewards);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
