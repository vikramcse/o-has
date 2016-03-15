'use strict';

module.exports = function(obj, key) {
	if(obj == null) return false;
	return Object.prototype.hasOwnProperty.call(obj, key);
};