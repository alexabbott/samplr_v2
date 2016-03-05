/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /kits              ->  index
 * POST    /kits              ->  create
 * GET     /kits/:id          ->  show
 * PUT     /kits/:id          ->  update
 * DELETE  /kits/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Kit = require('./kit.model');

// Get list of kits
exports.index = function(req, res) {
  Kit.find(function (err, kits) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(kits);
  });
};

// Get a single kit
exports.show = function(req, res) {
  Kit.findById(req.params.id, function (err, kit) {
    if(err) { return handleError(res, err); }
    if(!kit) { return res.status(404).send('Not Found'); }
    return res.json(kit);
  });
};

// Creates a new kit in the DB.
exports.create = function(req, res) {
  Kit.create(req.body, function(err, kit) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(kit);
  });
};

// Updates an existing kit in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Kit.findById(req.params.id, function (err, kit) {
    if (err) { return handleError(res, err); }
    if(!kit) { return res.status(404).send('Not Found'); }
    var updated = _.merge(kit, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(kit);
    });
  });
};

// Deletes a kit from the DB.
exports.destroy = function(req, res) {
  Kit.findById(req.params.id, function (err, kit) {
    if(err) { return handleError(res, err); }
    if(!kit) { return res.status(404).send('Not Found'); }
    kit.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
