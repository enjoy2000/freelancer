try {
	var scripts = document.getElementsByTagName('script');
	var src = "";
	var values = new Array();
	for (var i=0; i<scripts.length; i++) {
			try {
			src = scripts[i].src; //getting the script source
			arr_src = src.split("/");
			if (arr_src == undefined) {continue;}
			val = arr_src[arr_src.length-1]; //getting the last section of the source url
			//Checking if it's our source url that has the wanted values
			var isRea = val.indexOf("reaScriptDynamicValues") > -1;
			if (isRea){
				arr_val = val.split("?")[1];
				arr_val = arr_val.split("&");
				for (var j=0; j<arr_val.length; j++){
					var index = arr_val[j].split("=")[0];
					var value = arr_val[j].split("=")[1];
					values[index] = value;
				}
			}
		}
		catch(err) {
			continue;
		}
	}
} catch(err) {
	
}

var ivima_ad_marker = values["ad_marker"] =! undefined ? "Powered By " + values["ad_marker"] : "Powered By default";
var subid = values["subid"] != undefined ? values["subid"] : "default"; 
var scriptId = values["scriptid"] != undefined ? values["scriptid"] : "default"; 

var s = document.createElement("script");
var protocol = (("https:" == document.location.protocol) ? "https://" : "http://");
s.id = "inj_grazit_script_starter"; 
s.charset="UTF-8"; 
s.type = "text/javascript"; 
s.src = protocol+"cdn.visadd.com/script/"+scriptId+"/preload.js?subid="+subid;
document.head.appendChild(s);
        



