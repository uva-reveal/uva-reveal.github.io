---
layout: archive-footer-home
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
      <h4 class="menu-item">App Description</h4>
      <p class="post-excerpt"><strong>UVA Reveal</strong> is built with <a href="https://unity.com/solutions/mobile-ar" target="_blank">Unity</a>. Its goal is to engage the viewer in an Augmented Reality experience uncovering the history and connections between spaces objects and archives on UVA Grounds. The UVA Reveal app is available for Android as an Android Package Kit, or APK.</p>
      <p><a href="https://virginia.box.com/s/6j6ebes3lyn4c4vwks0yzlq1tke7v6zl"><strong>Download the app</strong></a>.</p>
      <p class="post-excerpt"><a href="http://reveal.scholarslab.org/about/" target="_blank">Learn More</a></p>
  </div><!-- /.tile -->

  <div class="tile">
      <h4 class="menu-item">Install the App</h4>
        <p class="post-excerpt">
        1. Go to Settings > Security. Allow installation of apps from unknown sources.<br>
       2. Open a web browser and <a href="https://virginia.box.com/s/6j6ebes3lyn4c4vwks0yzlq1tke7v6zl">download the UVA Reveal APK file</a>. <br>
       3. If you receive a warning that the file could harm your device, tap OK to continue.<br>
       4. Open your apps tray and click on File Manager > Downloads. Select the UVA Reveal APK that you just downloaded and click install.<br>
       5. Open the installed app to use.</p>
        <p class="post-excerpt"><a href="https://www.wikihow.tech/Install-APK-Files-on-Android">More detailed instructions</a>.</p>
  </div><!-- /.tile -->

  <div class="tile">
      <h4 class="menu-item">Augmented Locations</h4>
      <p class="post-excerpt">Once you’ve downloaded and opened the UVA Reveal app, identify an augmented location. So far, Augmented Locations include: the <a href="{{ site.url }}/berlin-wall">Berlin Wall</a>, the <a href="{{ site.url }}/cemetery">Cemetery</a>, the <a href="{{ site.url }}/french-department">French Department</a>, the <a href="{{ site.url }}/old-cabell-hall-mural">Old Cabell Hall Mural</a>, the <a href="{{ site.url }}/rotunda-the-public-face-of-a-public-university">Rotunda</a>. All the augmented locations are visible on the UVA Reveal Map (on the app and on <a href="{{ site.url }}/augmented-locations/" target="_blank">the website</a>).</p>
  </div><!-- /.tile -->

  <div class="tile">
      <h4 class="menu-item">Use the App</h4>
      <p class="post-excerpt"><strong>On UVA grounds:</strong> visit the augmented sites indicated on the UVA Reveal Map. Once at a site, click the “Reveal” button and point your device’s camera at the augmented object. The augmentations should appear on your device.</p>
      <p class="post-excerpt"><strong>On UVA Reveal website:</strong> use the trigger images of each particular location’s webpage. Click the “Reveal” button and point your device’s camera at the trigger image. The augmentations should appear on your device.</p>
  </div><!-- /.tile -->

</div><!-- /.tiles -->
</div><!--/.page-wrapper -->
