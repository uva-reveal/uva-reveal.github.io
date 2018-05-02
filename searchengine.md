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
  <p>Our project is based upon research from Special Collections. As graduate students, we understand the search algorithms and the physical labor of archival research, yet still feel accessibility barriers with this kind of work. Searching Special Collections thoroughly takes not only time, but a holistic understanding of the subject of study in order to phrase a query in multiple ways for optimal results.</p>

  <p>To that end, we created a search function using a relatively small database with a sample of holdings from Special Collections. The user may resarch a topic that we have narrowly defined for the scope of this project as an example. The topic includes multiple distinct keywords that relate to that topic. For example, a search for "music" includes not only the phrase "music" but "band," "choir," "piano," and other related terms. As of now, we offer one search that cross-references items related to both women and music, which we will later expand to show the relationship of various topics to one another, and more topical to our project, how the topics relate to Charlottesville and the surrounding areas.</p>
  <p>This search uses JavaScript to return results from a catalog of Json files from VIRGO. We visualized the data by dynamically changing the CSS through JavaScript to make our search more discoverable and accessible. Each item is scaled in size based on its relative importance within the topic search, which visually informs the user which item may be more relevant to their research.</p>
  <p> This search function should help others interested in projects similar to UVa Reveal here at UVa or in other communities get over the hurdle of archival research and discover, in a clearer way, the vast collections at their home libraries.</p>


<form action=''>
<h4>Select a Topic:</h4>
  <input type="checkbox" id="cabell" onclick="search('cabell');">Cabell Hall<br>
  <input type="checkbox" id="women" onclick="search('women');">Women<br>
  <input type="checkbox" id="music" onclick="search('music');">Music<br>
  <input type="checkbox" id="rotunda" onclick="search('rotunda');">Rotunda<br>
<!--   <input type="checkbox" id="berlin" onclick="search('berlin');">Berlin Wall<br>
  <input type="checkbox" id="languages" onclick="search('languages');">Foreign Languages<br>
  <input type="checkbox" id="cemetery" onclick="search('cemetery');">Cemetery<br> -->
  <input type="checkbox" id="womenmusic" onclick="search2('women', 'music');">Women and Music<br>
  <input type="checkbox" id="clear" onclick="window.location.reload()">Clear Search
  <!--   <input type="checkbox" id="cabellmusic" onclick="search3('cabellmusic');">Music and Cabell Hall<br>
  <input type="checkbox" id="rotundawomen" onclick="search('rotundawomen');">Women and the Rotunda<br> -->
</form>

<div>

  <h4>Search Results:</h4>
  <ul class="results-list">


  </ul>
</div>
</body>


</html>
