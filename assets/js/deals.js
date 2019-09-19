var ref = document.referrer;
var current_url = window.location.href;
var new_url = current_url.split('?url=')[1]
if (ref.indexOf("sustainablesites") != -1)  
{
  window.location = new_url
}


