---
layout: archive
permalink: /
title: ""
---

<figure>
<div class="page-lead">
  <div class="wrap page-lead-content" style="position:absolute; width: 50%; height: auto;">
    <img src="/assets/logo/logo2.png">
  </div>
  <img class="mySlides" src="/images/slide-1.jpg" style="width:100%">
  <img class="mySlides" src="/images/slide-4.jpg" style="width:100%">
  <img class="mySlides" src="/images/slide-5.jpg" style="width:100%">
</div>
<figcaption>Photos by <a href="http://www.acceptable.photography/2018-04-18-praxis">Shane Lin</a> and <a href="https://unsplash.com/search/photos/university-library">Unsplash</a>.</figcaption>
</figure>


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
    setTimeout(carousel, 4500); // Change image every 4.5 seconds
}
</script>


 <div id="page-wrapper">
      <!--[if lt IE 9]><div class="upgrade notice-warning"><strong>Your browser is quite old!</strong> Why not <a href="http://whatbrowser.org/">upgrade to a newer one</a> to better enjoy this site?</div><![endif]-->

<div class="tiles">

<div class="tile">
  <h2 class="post-title">App Description</h2>
  <p class="post-excerpt"><strong>UVA Reveal</strong> is built with <a href="https://unity.com/solutions/mobile-ar" target="_blank">Unity</a>. Its goal is to engage the viewer in an Augmented Reality experience uncovering the history and connections between spaces objects and archives on UVA Grounds. The UVA Reveal app is available for Android as an Android Package Kit, or APK. Download the app.[LINK]</p>
  <p class="post-excerpt"><a href="http://reveal.scholarslab.org/about/" target="_blank">Learn More</a></p>
</div><!-- /.tile -->

<div class="tile">
  <h2 class="post-title">Install the App</h2>
<p class="post-excerpt">
<ol>
<li>Go to Settings > Security. Allow installation of apps from unknown sources.</li>
</ol>
</p>
<p class="post-excerpt">Open a web browser and download the UVA Reveal APK file. [LINK]</p>
<p class="post-excerpt">If you receive a warning that the file could harm your device, tap OK to continue.</p>
<p class="post-excerpt">Open your apps tray and click on File Manager > Downloads. Select the UVA Reveal APK that you just downloaded and click install.</p>
<p class="post-excerpt">Open the installed app to use.</p>
<p class="post-excerpt"><a href="https://www.wikihow.tech/Install-APK-Files-on-Android">More detailed instructions</a>.</p>
</div><!-- /.tile -->

<div class="tile">
  <h2 class="post-title">Augmented Locations</h2>
  <p class="post-excerpt">Once you’ve downloaded and opened the UVA Reveal app, identify an augmented location. So far, Augmented Locations include: the Berlin Wall, the Cemetery, the French Department, the Old Cabell Hall Mural, the Rotunda. All the augmented locations are visible on the UVA Reveal Map (on the app and on <a href="{{ site.url }}/augmented-locations/" target="_blank">the website</a>).</p>
</div><!-- /.tile -->

<div class="tile">
  <h2 class="post-title">Use the App</h2>
  <p class="post-excerpt"><strong>On UVA grounds:</strong> visit the augmented sites indicated on the UVA Reveal Map. Once at a site, click the “Reveal” button and point your device’s camera at the augmented object. The augmentations should appear on your device.</p>
  <p class="post-excerpt"><strong>On UVA Reveal website:</strong> use the trigger images of each particular location’s webpage. Click the “Reveal” button and point your device’s camera at the trigger image. The augmentations should appear on your device.</p>
</div><!-- /.tile -->

</div><!-- /.tiles -->
