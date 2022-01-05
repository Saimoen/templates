Image Slider Maker README
=========================
ImageSliderMaker.com


Using in your website
---------------------

Please first make sure you have fully extracted the contents of the zip file.
In Windows, right-click on imageslidermaker.zip and select Extract All...

To get your slider working in your web page, you must add
my-slider.css, ism-2.2.min.js and the slide images to your project
directory and paste the markup (included below) into your HTML.

The directory structure of this package:

  imageslidermaker/
    README.txt
    example.html
    ism/
      css/
        my-slider.css
      js/
        ism-2.2.min.js
      image/
        slides/
          city-690332_1280.jpg
          new-york-670108_1280.jpg
          singapore-river-255116_1280.jpg

For a working example, open example.html in your web browser or
follow the instructions below to integrate the slider into your
project.


Step by step instructions
-------------------------

1. Paste the following into the head of your HTML file:

<link href="http://fonts.googleapis.com/css?family=Noticia+Text|Josefin+Slab|Alfa+Slab+One|Shadows+Into+Light+Two|Kaushan+Script" rel="stylesheet" type="text/css">
<link rel="stylesheet" href="ism/css/my-slider.css"/>
<script src="ism/js/ism-2.2.min.js"></script>


2. Paste this into the body of your HTML file (at the location where:
   you would like your slider to appear in the page):

<div class="ism-slider" data-play_type="loop" data-image_fx="zoompan" id="my-slider">
  <ol>
    <li>
      <img src="ism/image/slides/city-690332_1280.jpg">
      <div class="ism-caption ism-caption-0" data-delay='300'>City by night...</div>
      <div class="ism-caption ism-caption-1" data-delay='600'>...coming alive</div>
    </li>
    <li>
      <img src="ism/image/slides/new-york-670108_1280.jpg">
      <div class="ism-caption ism-caption-0">New York City</div>
      <div class="ism-caption ism-caption-1" data-delay='500'>USA</div>
    </li>
    <li>
      <img src="ism/image/slides/singapore-river-255116_1280.jpg">
      <div class="ism-caption ism-caption-0">Singapore</div>
    </li>
  </ol>
</div>
<p class="ism-badge" id="my-slider-ism-badge"><a class="ism-link" href="http://imageslidermaker.com" rel="nofollow">generated with ISM</a></p>


3. Copy the ism/ directory into the root directory of your project.

   The css, js and image paths are relative, meaning the ism/
   directory should be in the same directory (path) as your HTML
   file containing the slider.


