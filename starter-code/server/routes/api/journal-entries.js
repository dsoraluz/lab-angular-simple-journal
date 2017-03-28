const express       = require('express');
const router        = express.Router();
const mongoose = require('mongoose');

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
    // res.end();

  });
});

router.post('/journal-entries', (req,res,next)=>{
  const theEntry = new Journal({
    title: req.body.title,
    date: req.body.date,
    content: req.body.content
  });

  theEntry.save((err)=>{
    if(err){
      res.json(err);
      return;
    }
    res.json({
      message: 'new entry was created',
      id: theEntry._id
    });
  });
});


router.get('/journal-entries/:id', (req,res,next)=>{
  if(!mongoose.Types.ObjectId.isValid(req.params.id)){
    res.status(400)
    .json({message: 'Specified id is not valid'});
    return;
  }
  Journal.findById(req.params.id, (err, theEntry)=>{
    if(err){
      res.json(err);
      return;
    }
    res.json(theEntry);
  });
});



module.exports = router;
