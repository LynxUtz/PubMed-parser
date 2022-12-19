function httpGet(theUrl) {
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
	xmlHttp.send( null );
	return xmlHttp.responseText;
}


let url = "https://pubmed.ncbi.nih.gov/";

let search, format, numRes;
search = "cells";
format = "pubmed";
numRes = "200";

let options = "?" + "term=" + search + "&format=" + format + "&size=" + numRes;


let resultPage = httpGet(url + options);

// Then write her source code.
