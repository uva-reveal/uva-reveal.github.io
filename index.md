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


<table style="width:100%">
  <tr>
    <th>App Description</th>
    <th>Install the App</th> 
    <th>Use the App</th>
  </tr>
  <tr>
<td>
 <strong>UVA Reveal</strong> is built with <a href="https://unity.com/solutions/mobile-ar" target="_blank">Unity</a>. Its goal is to engage the viewer in an Augmented Reality experience uncovering the history and connections between spaces objects and archives on UVA Grounds. The UVA Reveal app is available for Android as an Android Package Kit, or APK. Download the app.[LINK]<br><small><a href="http://reveal.scholarslab.org/about/" target="_blank">Learn More</a></small>
</td>
    <td> 
1. Once the app downloaded. Go to the Settings > Security on your Android device. Allow installation of apps from unknown sources and click OK.<br> 
2. Open a web browser and download the UVA Reveal APK file here: *X*<br> 
3. When the download is complete, you’ll receive a notification in the Notification Bar. (If you receive a warning that the file could harm your device, tap OK to continue.)<br> 
4. Open your apps tray and click on File Manager > Downloads. Select the UVA Reveal APK that you just downloaded and click install.<br> 
5. Open the installed app to use.<br>
<small>
<a href="https://www.wikihow.tech/Install-APK-Files-on-Android">More detailed instructions</a>.</small>
</td>
<td>
Once you’ve downloaded and opened the UVA Reveal app, identify an augmented location. Augmented locations are visible on the UVA Reveal Map (available on both the app and on <a href="{{ site.url }}/augmented-locations/" target="_blank">the website</a>).<br>
If you are on UVA grounds, you can visit the augmented sites indicated on the UVA Reveal Map. Once at a site, click the “Reveal” button and point your device’s camera at the augmented object. The augmentations should appear on your device.<br>
If you are using the UVA Reveal website, use the trigger images at the bottom of each particular location’s webpage. Click the “Reveal” button and point your device’s camera at the trigger image. The augmentations should appear on your device.<br>
</td>
</tr> 
</table>
