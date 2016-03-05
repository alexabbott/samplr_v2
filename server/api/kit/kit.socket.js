/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var kit = require('./kit.model');

exports.register = function(socket) {
  kit.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  kit.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('kit:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('kit:remove', doc);
}
