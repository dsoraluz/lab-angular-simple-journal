const express       = require('express');
const router        = express.Router();

const Journal = require('../../models/journal-entry');



router.get('/journal-entries', (req,res,next)=>{
  Journal.find((err, entriesList)=>{
    if(err){
      res.json(err);
      return;
    }
    console.log("before res.json");
    res.json(entriesList);
    console.log(entriesList);
    console.log("after res.json");
    res.end();

  });
});


module.exports = router;
