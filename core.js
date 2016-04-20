/*============================================================================================================
	@author
		Rahul Kumar
		Git || Fb : rahulkumar26
	@description
		core script for ROCKING JS
============================================================================================================*/

function RJS() {

	'use strict';

	// turning arguments into an array
	var args = Array.prototype.slice.call(arguments),
		// the last argument is the callback
		callback = args.pop(),
		// modules can be passed as an array or as individual parameters
		modules = (args[0] && typeof args[0] === "string") ? args : args[0],
		i;

	// make sure the function is called
	// as a constructor
	if (!(this instanceof RJS)) {
		return new RJS(modules, callback);
	}

	// now add modules to the core 'this' object
	// no modules or "*" both mean "use all modules"
	if (!modules || modules[0] === "*") {
		modules = [];
		for (i in RJS.modules) {
			if (RJS.modules.hasOwnProperty(i)) {
				modules.push(i);
			}
		}
	}

	// initialize the required modules
	for (i = 0; i < modules.length; i += 1) {
		RJS.modules[modules[i]](this);
	}

	var _this = (modules.length > 1) ? RJS.modules : this;

	// call the callback
	callback(_this);
}

//basic information
RJS.prototype = {
	name: "Rocking JS",
	version: "1.0 beta",
	author: "Rahul Kumar",
	getInfo: function() {
		return "Name: " + this.name + " \n Version: " + this.version + " \n By: " + this.author;
	},
	ns: function(string) {
		//name spacing method
		var parts = string.split('.'),
			parent = RJS.modules,
			i;
		// if global object
		if (parts[0] === "RJS" || parts[0] === "ROCKINGJS") {
			parts = parts.slice(1);
		}

		for (i = 0; i < parts.length; i += 1) {
			// create a property if it doesn't exist
			if (typeof parent[parts[i]] === undefined) {
				parent[parts[i]] = {};
			}
			parent = parent[parts[i]];
		}

		return parent;
	}
};

//initialize module object
RJS.modules = {};
