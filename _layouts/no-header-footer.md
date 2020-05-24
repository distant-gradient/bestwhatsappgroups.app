<!-- used to render submit form in app --> 

<!DOCTYPE html>
<html lang="{{ page.lang | default: site.lang | default: "en" }}">

  {% include head.html %}

<body class="{{layout}}">
	<!-- defer loading of font and font awesome -->
	<noscript id="deferred-styles">
		<link href="https://fonts.googleapis.com/css?family=Righteous%7CMerriweather:300,300i,400,400i,700,700i&display=swap" rel="stylesheet">
    <!-- font awesome
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
	  -->
  </noscript>


<div class="site-content">

  <div class="container"> 
 
    <!-- Content
    ================================================== -->
    <div class="main-content">
      {{ content }}
    </div>
 
  </div>

</div> <!-- /.site-content -->
<!-- Scripts
================================================== -->

<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>

<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>

<script src="{{ site.baseurl }}/assets/js/mediumish.js"></script>

{% if site.lazyimages == "enabled" %}
<script src="{{ site.baseurl }}/assets/js/lazyload.js"></script>
{% endif %}

<script src="{{ site.baseurl }}/assets/js/ie10-viewport-bug-workaround.js"></script> 

</body>
</html>
