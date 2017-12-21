var utils = window.optimizely.get("utils");

var hidePopup = function() {
  document.querySelector('.optly-modal').style.display = "none";
};

var showPopup = function() {
	document.querySelector('.optly-modal').style.display = "block";
};

var getCookie = function(name) {
   var match = document.cookie.match(name+'=([^;]*)');
   return match ? match[1] : undefined;
};

function setExpiration(cookieLife){
    var today = new Date();
    var expr = new Date(today.getTime() + cookieLife * 24 * 60 * 60 * 1000);
    return  expr.toGMTString();
}

function setCookie(name, value, expires, path, domain, secure){
	cookieStr = name + "=" + escape(value) + "; ";

	if(expires){
		expires = setExpiration(expires);
		cookieStr += "expires=" + expires + "; ";
	}
	if(path){
		cookieStr += "path=" + path + "; ";
	}
	if(domain){
		cookieStr += "domain=" + domain + "; ";
	}
	if(secure){
		cookieStr += "secure; ";
	}

	document.cookie = cookieStr;
}


utils.waitForElement('body').then(function(element) {
  var html = widget.$html;
  element.insertAdjacentHTML('beforeend', html);
  hidePopup();

  if(getCookie('registered')==='1') {
	showPopup();
}

  document.querySelector('.optly-modal-close').addEventListener('click', function() {
   hidePopup();
   setCookie('registered', '', -1);
   console.log('cookie deleted');
   setCookie('registered','2',1,'atticandbutton.us');
   console.log('new cookie value set');
 });
});
