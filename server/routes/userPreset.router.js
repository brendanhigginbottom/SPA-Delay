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
  const userId = req.user.id;
  console.log(req.body);
  const {presetValues, presetName, presetDesc} = req.body;
  const queryText = `
  INSERT INTO "user_presets" ("user_id", "user_delay.json", "name", "description", "public")
  VALUES ($1, $2, $3, $4, $5);
  `;

  pool.query(queryText, [userId, presetValues, presetName, presetDesc, true])
    .then(result => {
      res.sendStatus(201);
    }).catch(error => {
      console.log(`Error is preset POST ${error}`)
      res.sendStatus(500);
    });
  
});

module.exports = router;
