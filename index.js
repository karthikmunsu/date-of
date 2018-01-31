"use strict"
exports.date = function() {
	//getting the date in mm-dd-yyyy format
	var tmp = date.date();
	var _date = (tmp.getMonth()+1) + '-' + tmp.getDate() + '-' + tmp.getFullYear();
	return _date;
}

export.time = function() {
  //getting the time and seconds in 24hrs format hh:mm:ss. 
    var tmp = date.date();
	var min = tmp.getMinutes();
	if(min.toString().length < 2)
		min = '0' + min;
	var _time = tmp.getHours() + ':' + min + ':' + tmp.getSeconds();
	return _time;
}

