const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
  const userID = req.body.id;
  console.log(req.body);
  
});

module.exports = router;
