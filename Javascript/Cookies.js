function setCookie(cname, cvalue, exdays) {
	exdays = exdays || 30;
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires="+d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i = 0; i < ca.length; i++) {
  	  var c = ca[i];
    	while (c.charAt(0) == ' ') {
        	c = c.substring(1);
    	}
    	if (c.indexOf(name) == 0) {
        	return c.substring(name.length, c.length);
    	}
	}
	return "";
}

function deleteCookie(cname){
	setCookie(cname, "", -3);
}

function getCookieInt(cname){
	var val = getCookie(cname);
	return val == "" ? 0 : parseInt(val, 10);
}

function setCookieBoolean(cname, bvalue, exdays){
	exdays = exdays || 30;
	setCookie(cname, bvalue ? 1 : 0, exdays);
}

function getCookieBoolean(cname){
	return parseInt(getCookie(cname), 10) == 1;
}

function refreshCookie(cname){
	setCookie(cname, getCookie(cname));
}