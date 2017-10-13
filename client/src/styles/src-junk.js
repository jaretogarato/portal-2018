
* { margin: 0; padding: 0; }
/* Responsive */
#header {
  text-align: center;
  min-height: 20em;
  position: relative;
}

#image-container { position: absolute;
  min-height: 100%;
  width: 100%;
  overflow: hidden;
  background: url(http://lorempixel.com/400/300); background-size: 100%; }

#image-container img {
  position: absolute;
  transition: all .5s ease-in-out;
  width: 100%;
  left: 50%;
  top: 25%;
  margin-top: -25%;
  margin-left: -50%;
}

@media (min-width: 50em) {
  #image-container img {
    top: 50%; margin-top: -25%;
  }
}

@media (min-width: 64em) {
  #image-container img {
    top: 75%;
  }
}

#text-container {
  background-image: linear-gradient(0, black, transparent 80%), linear-gradient(0, black, transparent 0px);
  z-index: 2;
  position: relative;
  display: block;
  min-height: 20em;
}

#text-container:after {
  content: ' ';
  clear: both;
  display: table;
}

h1 { position: relative;
  color: white;
  margin: 2em;
  border: 3px solid white;
  display: inline-block;
  padding: 2em 3em;
  font-family: sans-serif;
  font-weight: 100;
}


<div id="header">
  <div id="image-container">
    <img src="http://lorempixel.com/800/600" alt="SEO Friendly" />
  </div>
  <div id="text-container">
    <h1>THIS IS A TITLE</h1>
  </div>
</div>
