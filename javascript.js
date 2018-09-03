// Apply jQuery to the document
var jq = document.createElement('script'),
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js",
document.getElementsByTagName('head')[0].appendChild(jq),


// Remove all intervals
(function(w){w = w || window; var i = w.setInterval(function(){},100000); while(i>=0) { w.clearInterval(i--); }})(/*window*/);

