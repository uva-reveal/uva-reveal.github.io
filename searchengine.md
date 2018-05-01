---
title: Archive Search
layout: article
permalink: /searchengine
---
<html>
<link rel="stylesheet" type="text/css" href="http://reveal.scholarslab.org/javascript/style.css">
<link rel="stylesheet" href="http://reveal.scholarslab.org/css/main.css">
<link rel="stylesheet" href="http://reveal.scholarslab.org/css/styles.css">

<body>
  <script src='http://reveal.scholarslab.org/javascript/d3.js'></script>
  <script src='http://reveal.scholarslab.org/javascript/lodash.js'></script>
  <script src='http://reveal.scholarslab.org/javascript/analysis.js'></script>
  <script src='http://reveal.scholarslab.org/javascript/jquery-3.3.1.min.js'></script>
  <script src="https://d3js.org/d3.v4.min.js"></script>
  <p>Our project is based upon research from Special Collections. As graduate students, we understand the search algorithms and the physical labor of archival research, yet still feel accessible barriers with this kind of work. Searching Special Collections thoroughly takes not only time, but a holistic understanding of the subject of study in order to phrase a query in multiple ways for optimal results.</p>
  <p>Our project could have benefitted from a different, more discoverable search experience. To that end, we created a search function using UVa library data. Given a database with a sample of Special Collections holdings, the user may research a topic (which we have narrowly defined for the scope of our project) using multiple distinct keywords that relate to that topic with a cross search that reveals if the corresponding library object has a thematic connection to UVa or Charlottesville. A JavaScript function returns results from a catalog of Json library files, and we are using the d3 library to visualize the data into a clear metric of relevancy based on the number of keywords and its relation to UVa.</p>
  <p> This search function should help others interested in projects similar to UVa Reveal here at UVa or in other communities get over the hurdle of archival research and discover, in a clearer way, the vast collections at their home libraries.</p>
<form action=''>
  <input type="checkbox" id="cabell" onclick="search('cabell');">Cabell Hall<br>
  <input type="checkbox" id="women" onclick="search('women');">Women<br>
  <input type="checkbox" id="music" onclick="search('music');">Music<br>
  <input type="checkbox" id="rotunda" onclick="search('rotunda');">Rotunda<br>
  <input type="checkbox" id="berlin" onclick="search('berlin');">Berlin Wall<br>
  <input type="checkbox" id="languages" onclick="search('languages');">Foreign Languages<br>
  <input type="checkbox" id="cemetery" onclick="search('cemetery');">Cemetery<br>
  <input type="checkbox" id="womenmusic" onclick="search2('women', 'music');">Women and Music<br>
<!--   <input type="checkbox" id="cabellmusic" onclick="search3('cabellmusic');">Music and Cabell Hall<br>
  <input type="checkbox" id="rotundawomen" onclick="search('rotundawomen');">Women and the Rotunda<br> -->
</form>

<div>

  <h2>Search Results:</h2>
  <ul class="results-list">


  </ul>
</div>
</body>


</html>