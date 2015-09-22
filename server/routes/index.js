var express = require('express');
var router = express.Router();
var Item = require('../models/items');

router.get('/',function(req,res,next){
  res.render('index');
});

router.get('/items', function(req, res, next) {
  Item.find({},function(err, data) {
    if (err) {
      res.json({
        'message': err
      });
    } else {
      res.json(data);
    }
  });
});

router.get('/item/:id', function(req, res, next) {
  Item.findById(req.params.id,function(err, data) {
    if (err) {
      res.json({
        'message': err
      });
    } else {
      res.json(data);
    }
  });
});

router.post('/items', function(req, res, next) {
  var newItem = new Item({
    name: req.body.name,
    location: req.body.location
  });
  newItem.save(function(err, data) {
    if (err) {
      res.json({
        'message': err
      });
    } else {
      res.json(data);
    }
  });
});

router.put('/item/:id/', function(req, res, next) {
  var update = {
    name: req.params.name,
    location: req.params.location
  };
  Item.findByIdAndUpdate(req.params.id,update,function(err, data) {
    if (err) {
      res.json({
        'message': err
      });
    } else {
      res.json(data);
    }
  });
});
router.delete('/item/:id', function(req, res, next) {
  Item.findByIdAndRemove(req.params.id,function(err, data) {
    if (err) {
      res.json({
        'message': err
      });
    } else {
      res.json(data);
    }
  });
});

module.exports = router;
