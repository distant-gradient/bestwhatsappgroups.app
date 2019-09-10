var ref = document.referrer;
if (ref.includes("reviewindex"))  
{
   alert("referrer if",ref);
   var current_url = window.location.href;
   window.location = current_url.substring(51,);
}
else
{
   alert("referrer else:",ref);
 // window.location = 'https://www.amazon.in/';
}


