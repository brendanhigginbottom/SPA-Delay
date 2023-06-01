const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route 
 */
router.get('/', (req, res) => {
  // GET route code here
  const userId = req.user.id;
  const queryText = ` 
  SELECT * FROM "user_presets" WHERE "user_id" = $1;
  `;
  pool.query(queryText, [userId]).then(result => {
    res.send(result.rows)
  }).catch(error => {
    console.log(`Error in GET userPresets ${error}`);
    res.sendStatus(500);
  });
});

/**
 * POST route 
 */
router.post('/', (req, res) => {
  // POST route code here
  const userId = req.user.id;
  console.log(req.body);
  const {presetValues, presetName, presetDesc} = req.body;
  const queryText = `
  INSERT INTO "user_presets" ("user_id", "user_preset_values", "name", "description", "public")
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

/**
 * DELETE route
 */
router.delete('/:id', (req, res) => {
  const presetId = req.params.id;
  console.log(presetId);
  const queryText = `
  DELETE FROM "user_presets" WHERE "id" = $1
  `;

  pool.query(queryText, [presetId]).then(result => {
    res.sendStatus(200);
    }).catch(error => {
    console.log(`Error in DELETE ${error}`);
    res.sendStatus(500);
    })
});

/**
 * PUT route
 */

router.put('/:id', (req, res) => {
  console.log(req.body.name);
  const id = req.params.id;
  const name  = req.body.name;
  const desc = req.body.desc;
  const queryText = `
    UPDATE "user_presets" SET "name" = $1, "description" = $2
    WHERE "id" = $3;
  `;
  pool.query(queryText, [name, desc, id]).then(result => {
    res.sendStatus(200);
  }).catch(error => {
    console.log(`error in PUT ${error}`);
    res.sendStatus(500);
  })
})

module.exports = router;
