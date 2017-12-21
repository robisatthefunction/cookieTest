var setCookie = function(c_name,value,exdays,c_domain) {
   c_domain = (typeof c_domain === "undefined") ? "" : "domain=" + c_domain + ";";
   var exdate=new Date();
   exdate.setDate(exdate.getDate() + exdays);
   var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
   document.cookie=c_name + "=" + c_value + ";" + c_domain + "path=/";
 };

var getCookie = function(name) {
   var match = document.cookie.match(name+'=([^;]*)');
   if (!match) {
     setCookie(name,'1',1,'atticandbutton.us');
   }
 };

getCookie('registered');
