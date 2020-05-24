---
layout: page
title: Contact Us | WhatsApp Groups App 
description: Get in touch with any questions, clarifications or requirements by filling out the form below. We'll get back as soon as possible.
permalink: /contact

---

<form action="" id="contact-form" method="POST">    
  <p class="mb-4">Please send across your message. We will reply as soon as possible!</p>
  <div class="form-group row">
    <div class="col-md-6">
  
  <input class="form-control" type="text" name="contact-name" id="contact-name" placeholder="Name*" required>
    </div>
    <div class="col-md-6">
  
  <input class="form-control" type="email" name="contact-email" id="contact-email" placeholder="E-mail Address*" required>
  
  </div>
  </div>
  <textarea rows="8" class="form-control mb-3" name="contact-message" id="contact-message" placeholder="Message*" required></textarea> 
  <button class="btn btn-success" type="contact-submit" value="Send">Submit</button>
  <br />
  <br />
  <div id="contact-response" class="alert alert-success" style="display:none">
    <strong>Success!!</strong> Thank you for getting in touch.
  </div>
</form>

<br/>
<br/>
<br/>
<br/>

<script>
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); //to prevent form submission
    var contactName = document.getElementById('contact-name').value
    var contactEmail = document.getElementById('contact-email').value
    var contactMessage = document.getElementById('contact-message').value
    var url = `https://docs.google.com/forms/d/e/1FAIpQLScWwsp5Kdb3gX7eJiBV1WDqcxI8t2phM0DH_LaCpTFAKc0AeA/formResponse?usp=pp_url&entry.362079096=${contactName}&entry.897438814=${contactEmail}&entry.523981948=${contactMessage}&submit=Submit` 
    fetch(url) 
      .then(data => console.log(data)) 
      .then(res => document.getElementById("contact-response").style.display = "block")
    document.getElementById("contact-response").style.display = "block"

    // set values to null
    document.getElementById('contact-name').value = ''
    document.getElementById('contact-email').value = ''
    document.getElementById('contact-message').value = ''
  })
</script>



