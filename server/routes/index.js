var express = require('express');
var router = express.Router();
var Item = require('../models/items');

router.get('/items',function(req,res,next){
  res.render('index');
});


router.get('/items', function(req, res, next) {
  Item.find(function(err, data) {
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
  Item.find({
    _id: req.params.id
  }, function(err, data) {
    if (err) {
      res.json({
        'message': err
      });
    } else {
      res.json(data);
    }
  });
});

router.post('/items/:name/:location', function(req, res, next) {
  var newItem = new Item({
    name: req.params.name,
    location: req.params.location
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

router.put('/item/:id/:name/:location', function(req, res, next) {
  var query = {
    _id: req.params.id
  };
  var update = {
    name: req.params.name,
    location: req.params.location
  };
  var option = {
    new: true
  };
  Item.findOneAndUpdate(query, update, option, function(err, data) {
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
  Item.remove({
    id: req.params.id
  }, function(err, data) {
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
