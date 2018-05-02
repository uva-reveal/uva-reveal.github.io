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

### App Description
Our project uses Unity to layer 3D models on images – including university buildings and physical objects – that will enable the viewer to experience the virtual layering of time upon an object. Unity is easily exportable to Android, iOS, and HoloLens platforms, and we have created an app with which our users will be able to engage the AR experience (including the virtual display of text, images, and videos upon physical objects) through their personal devices. In so doing, *UVA Reveal* helps uncover the history of and connections between spaces at the university. To download our app, please visit *X*.

### Instructions: How to Download the App
The UVA Reveal app is available for Android as an Android Package Kit, or APK. To install the UVA Reveal app: 
1.	Go to the Settings > Security on your Android device. Allow installation of apps from unknown sources and click OK. 
2.	Open a web browser and download the UVA Reveal APK file here: *X* 
3.	When the download is complete, you’ll receive a notification in the Notification Bar. (If you receive a warning that the file could harm your device, tap OK to continue.) 
4.	Open your apps tray and click on File Manager > Downloads. Select the UVA Reveal APK that you just downloaded and click install. 
5.	Open the installed app to use.
For instructions that are supplemented with images, please see the <a href="https://www.wikihow.tech/Install-APK-Files-on-Android">WikiHow page</a>.

### Instructions: How to Use the App

Once you’ve downloaded and opened the UVA Reveal app (see instructions above), identify an augmented location. Augmented locations are visible on the UVA Reveal Map (available on both the app and on the website). 
If you are on UVA grounds, you can visit the augmented sites indicated on the UVA Reveal Map. Once at a site, click the “Reveal” button and point your device’s camera at the augmented object. The augmentations should appear on your device.
If you are using the UVA Reveal website, use the trigger images at the bottom of each particular location’s webpage. Click the “Reveal” button and point your device’s camera at the trigger image. The augmentations should appear on your device.

