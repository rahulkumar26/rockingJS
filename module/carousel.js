//new carousel component

RJS.modules.carousel = function(option) {

	var _this = option;

	_this.bullet = false;
	_this.pagination = false;
	_this.arrow = false;
	_this.init = function(){
		console.log("bullet:" + _this.bullet + " \n pagination:" + _this.pagination + " \n arrow:" + _this.arrow);
	};
};
