//new tab component

RJS.modules.tab = function(option) {

	var _this = option;

	_this.horizontal = true;
	_this.dragable = false;
	_this.init = function(){
		console.log("horizontal:" + _this.horizontal + " \n dragable:" + _this.dragable);
	};
};