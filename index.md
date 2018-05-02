---
layout: default
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
<figcaption>Photos by <a href="http://www.acceptable.photography/2018-04-18-praxis" target="_blank">Shane Lin</a> and <a href="https://unsplash.com/search/photos/university-library" target="_blank">Unsplash</a>.</figcaption>
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


<style>
.grid-container {
  display: grid;
  
  grid-template-columns: auto auto auto;
  grid-auto-rows: min-content;
  /* grid-template-columns: repeat(3, minmax(200px, 1fr)); */

  /* grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); */
  /* grid-template: 300px; auto auto auto; */
  grid-gap: 50px;
  background-color: light-grey;
  padding: 10px;
}
.grid-container>div {
  background-color: light-grey;
  text-align: left;
  padding: 0px;
  font-size: inherit;
}
</style>

<div class="grid-container">
  <div class="item1">
  <h3><small>App Description</small></h3>
<p><small><strong>UVA Reveal</strong> is built with <a href="https://unity.com/solutions/mobile-ar" target="_blank">Unity</a>. Its goal is to engage the viewer in an Augmented Reality experience uncovering the history and connections between spaces objects and archives on UVA Grounds. To download the app, please visit *X*.</small></p>
<small><a href="http://reveal.scholarslab.org/about/" target="_blank">Learn More</a></small>
</div>
  <div class="item2"><h3><small>Install the App</small></h3>
<p><small>The UVA Reveal app is available for Android as an Android Package Kit, or APK. </small></p> 
<ol>
<li><small>Go to the Settings > Security on your Android device. Allow installation of apps from unknown sources and click OK.</small></li> 
<li><small>Open a web browser and download the UVA Reveal APK file here: *X*</small></li> 
<li><small>When the download is complete, you’ll receive a notification in the Notification Bar. (If you receive a warning that the file could harm your device, tap OK to continue.)</small></li> 
<li><small>Open your apps tray and click on File Manager > Downloads. Select the UVA Reveal APK that you just downloaded and click install.</small></li> 
<li><small>Open the installed app to use.</small></li>
</ol>
<p><small>For instructions that are supplemented with images, please see the <a href="https://www.wikihow.tech/Install-APK-Files-on-Android">WikiHow page</a>.</small></p></div>
  <div class="item3"><h3><small>Use the App</small></h3>

<ul>
<li>
<small>
Once you’ve downloaded and opened the UVA Reveal app, identify an augmented location. Augmented locations are visible on the UVA Reveal Map (available on both the app and on <a href="{{ site.url }}/augmented-locations/" target="_blank">the website</a>).
</small>
</li>
<li>
<small>
If you are on UVA grounds, you can visit the augmented sites indicated on the UVA Reveal Map. Once at a site, click the “Reveal” button and point your device’s camera at the augmented object. The augmentations should appear on your device.
</small>
</li>
<li>
<small>
If you are using the UVA Reveal website, use the trigger images at the bottom of each particular location’s webpage. Click the “Reveal” button and point your device’s camera at the trigger image. The augmentations should appear on your device.
</small>
</li>
</ul>
</div>
</div>
