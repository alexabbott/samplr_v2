'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var KitSchema = new Schema({
  name: String,
  author: String,
  sample1name: String,
  sample1info: String,
  sample1url: String,
  sample2name: String,
  sample2info: String,
  sample2url: String,
  sample3name: String,
  sample3info: String,
  sample3url: String,
  sample4name: String,
  sample4info: String,
  sample4url: String,
  sample5name: String,
  sample5info: String,
  sample5url: String,
  sample6name: String,
  sample6info: String,
  sample6url: String,
  sample7name: String,
  sample7info: String,
  sample7url: String,
  sample8name: String,
  sample8info: String,
  sample8url: String,
  sample9name: String,
  sample9info: String,
  sample9url: String,
  sample10name: String,
  sample10info: String,
  sample10url: String,
  sample11name: String,
  sample11info: String,
  sample11url: String,
  sample12name: String,
  sample12info: String,
  sample12url: String,
  sample13name: String,
  sample13info: String,
  sample13url: String,
  sample14name: String,
  sample14info: String,
  sample14url: String,
  sample15name: String,
  sample15info: String,
  sample15url: String,
  sample16name: String,
  sample16info: String,
  sample16url: String,
  active: Boolean
});

module.exports = mongoose.model('Kit', KitSchema);
