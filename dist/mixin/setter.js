"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (comp) {
  console.log(new comp().state);
  return comp;
};