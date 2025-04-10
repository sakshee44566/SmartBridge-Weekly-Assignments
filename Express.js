// server.js
const express = require('express');
const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
