---
layout: default
permalink: /
title: ""
---


<div class="page-lead">
  <div class="wrap page-lead-content" style="position:absolute; width: 50%; height: auto;">
    <img src="/assets/logo/logo2.png">
  </div>
  <img class="mySlides" src="/images/slide-1.jpg" style="width:100%">
  <img class="mySlides" src="/images/slide-4.jpg" style="width:100%">
  <img class="mySlides" src="/images/slide-5.jpg" style="width:100%">
</div>

<script>
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 4 seconds
}
</script>

#### ADD APP STUFF & INSTRUCTIONS
