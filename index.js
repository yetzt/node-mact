#!/usr/bin/env node

var exec = require("child_process").exec;
var path = require("path");

var binary = path.resolve(__dirname, "bin/mact");

module.exports = function(fn){
	if (process.platform !== "darwin") return fn(new Error("wrong os"));
	exec(binary, function(err, stdout){
		if (err) return fn("smc read failed");
		fn(null, parseFloat(stdout));
	});	
};
