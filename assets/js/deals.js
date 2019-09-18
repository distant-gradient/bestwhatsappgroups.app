var ref = document.referrer;
var current_url = window.location.href;
var new_url = current_url.split('?url=')[1]
if (ref.indexOf("sustainablesites") != -1)  
{
  document.getElementById('post_post').style.display = 'none'; 
  document.getElementById('post_loader').style.display = 'block'; 
  window.location = new_url
}
else
{
  document.getElementById('post_post').style.display = 'block'; 
  document.getElementById('post_loader').style.display = 'none'; 
}

