---
title:
layout: article
---
### About the Project

![group photo](/images/group-photo.jpg)

The 2017-2018 Praxis cohort has moved the material history of UVA out of Special Collections and onto Grounds. Using augmented reality (AR) applications, our project, titled *UVA Reveal: Augmenting the University*, challenges the surface of our perceptions of objects and places. *UVA Reveal* thus explores otherwise hidden stories, histories, and questions surrounding objects and spaces at UVA. In doing so, we hope to prompt users to re-examine everyday environs and critically reflect on the structure, culture, mission, and history of the university.

### Background of the Project
Augmented reality applications are becoming increasingly prevalent in society (witness Pokémon Go) and in the academy. For instance, a DH project titled *The Whole Story* uses an app that allows users to build AR statues of women and place them in the spatial landscape for others to see. By putting women back in the narrative, the app challenges the unequal statuary landscape and its implication that men are the makers of history. The digital spaces created by AR thus assume an openness and mobility that is lacking in physical space,[^footnote] which may be controlled or limited by socio-economic and political reasons. Nonetheless, these spatial boundaries can seemingly be circumvented in digital spaces, and users can move rapidly across zones that they would be unable to otherwise. *UVA Reveal* is thus designed to explore how real spaces can be experienced through changing, mobile technologies that enable spatial and temporal augmentation.
The objects of our investigation include both buildings and documents at or connected to UVA, especially documents from the special collections library.

[^footnote]: We recognize that the same can be said about digital spaces, i.e. firewalls, paying services, language barriers, profile/password credentials, profiles set to private, digital literacy, etc. Our project, however, is open-source and freely available to the public.

### About our Process
We designed *UVA Reveal: Augmenting the University* as a project that allows the user to reveal layers of meaning and various utilization through cross-platform engagement. Much like the design and thesis of our project, we let the development and implementation process reveal itself to us in various layers.

We began with a shared interest in public-facing digital humanities. We then:

1. Moved toward an interest in local scholarship
2. Thought about using the library for accessibility as well as community engagement outside of just the university
3. Wanted to understand the connection between UVA’s history, Charlottesville, and access to education, broadly conceived
  * Decided a good way to deal with that would be to connect sites on grounds to larger cultural and historical contexts
4. How, then, should we do that?
  * After a long discussion about accessibility and universal design, we decided on an Augmented Reality (AR) project that used a mobile app with a supplementary website; even as this website would have additional content, so too would it serve on its own as a standalone way to explore our project
  * The AR app is built on a Unity platform that allows scans of library objects, videos, websites, sound materials, and other sources to appear on a related site or object when scanned by the phone’s camera.
  * For the website, we wanted to keep the concept of “revealing” while providing a different user experience. Rather than using Unity, we are building a website using CSS and Javascript to visually connect various media with UVA locations in a discoverable manner.
  * From the beginning, we were also interested in creating a reproducible, documented project for likeminded scholars to follow. Toward this aim, we are documenting our workflow on GitHub.
  * We are also creating an alternative way to search Special Collections materials to enhance discoverability in library searches in order to better connect university materials with locations or larger political, cultural, or historical concepts. This process uses Javascript to query existing JSON library data.
5. When a user employs the app, they can have a full, on-site experience.
  * They may, however, be directed toward the webpage for additional content and will be prompted to visit the website off-site for additional project information or for further learning.
  * If a user is interested in creating their own version of *UVA Reveal: Augmenting the University*, they will find full documentation of Unity and the mobile platform on the website.
6. On the website, a user will have a full experience that is nonetheless mediated through their computer rather than on location.
  * They will have full documentation of what the app can do. They will also be given instructions for how to use the app on-site.
  * The website user will also gain access to the library search project, allowing them to browse through UVA library collections based on their selected search terms.
  * They will also see full documentation of the library search project so that interested parties can engage in similar work.



### App Description
Our project uses Unity to layer 3D models on images – including university buildings and physical objects – that will enable the viewer to experience the virtual layering of time upon an object. Unity is easily exportable to Android, iOS, and HoloLens platforms, and we have created an app with which our users will be able to engage the AR experience (including the virtual display of text, images, and videos upon physical objects) through their personal devices. In so doing, *UVA Reveal* helps uncover the history of and connections between spaces at the university.
To download our app, please visit *X*. Instructions about how to use the app are available <a href="http://reveal.scholarslab.org/index.html" target="_blank">here</a>.

### Website & Further Development
To develop our website we used a commonly static website generator, Jekyll. All the files are open source and live in a repository on <a href="https://github.com/uva-reveal/uva-reveal.github.io" target="_blank">github</a>. If you notice something that doesn't work properly please let us know. See something, say something!

### Acknowledgements
The 2017-2018 Praxis cohort would like to thank the UVA Scholars' Lab staff for their time and financial support, without which this project would not be possible. In particular, we thank Jeremy Boggs, Zoe LeBlanc, and Shane Lin for their development expertise; Ronda Grizzle, Amanda Visconti, and Brandon Walsh for project management advice; Drew Macqueen for his assistance with GIS; and last -but certainly not least- Arin Bennett for his invaluable insights and patience in teaching us how to use Unity.
