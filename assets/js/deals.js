var ref = document.referrer;
var current_url = window.location.href;
var destination_url = current_url.substring(51,);
if (ref.includes("reviewindex"))  
{
  $(document).ready(function() {
  document.getElementsByTagName("deals-html")[0].style.visibility = "visible";
  });
  window.location = destination_url;
}


