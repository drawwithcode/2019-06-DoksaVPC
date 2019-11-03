// declaring the variable for the title
var title;
// declaring the variable for the subtitle
var subtitle;
// declaring the variable for the image
var halloweenImg;
// declaring the variable for the container div
var container;
// declaring the variable for the body
var body;
// declaring the variable for the header
var header;
// declaring the variable for the title inside of the header
var headerTitle;
// declaring the variable for the logo inside of the header
var logo;
// declaring the variable for the slider that changes the background-color
var slider;
// declaring the variable for the slider value that will start from 255 to make a white background
var sliderValue = 255;
// a string variable that will define the content of the title
var titleText = "Whoa, what a nice empty space!";
// a string variable that will define the content of the subtitle
var subtitleText = "Let's create something...";
// a boolean variable that will check if the slider is already displayed
var sliderToggle = false;
// a boolean variable that will check if the header is already displayed
var headerToggle = false;
// a boolean variable that will check if the image is already displayed
var imgToggle = false;
//a variable that will define the size of the titles to make them animated when changed
var titlesSize = 0;
//a variable that will define the position of the header to make it animated when displayed
var headerPos = -90;
//a variable that will define the width of the image to make it animated when displayed
var imgSize = 0;


function preload(){
  // put preload code here
}

function setup() {
noCanvas();
//associating a variable to the body
body = select('body');
//creating a header element
header= createElement('header');
//setting the background-color of the header
header.style('background-color', 'rgb(40 40 40)');
//creating an h2 element with "headerTitle" class, that will be put inside of the header
headerTitle = createElement('h2', "I'm the self-reliant website. You can't control me!");
headerTitle.class('headerTitle');
//creating a 50px wide image element for the logo that will be put inside of the header
logo = createImg("./assets/logo.png", "logo");
logo.style('width', '50px');
//putting the logo and the title inside of the header
logo.parent(header);
headerTitle.parent(header);
//creating a container div
container = createDiv();
container.class("container");
//creating an img element for the halloween banner and setting its style to dsiplay: none
halloweenImg =  createImg("./assets/halloween.jpg", "halloween");
halloweenImg.style('width', '100%');
halloweenImg.class('hidden');
title =  createElement('h1', titleText);
subtitle =  createElement('h2', "Let's create something...");
//creating a slider element (that will control the background color of the container and the body)
// with 0 as min value, 255 as max value and 255 as starting value, setting its style to dsiplay: none
slider = createSlider(0, 255, 255);
slider.style('margin-left', '45%');
slider.class('hidden');

//putting the image, title, subtitle and slider inside of the container
var containerChildren = [halloweenImg, title, subtitle, slider];
for (var i = 0; i < containerChildren.length; i++){
containerChildren[i].parent(container);
}
//setting a time after wich the first animation function will start
setTimeout(changeFont, 2000);
}

function draw() {
  //the value of the slider defines the background-colo of the body and the container div
container.style('background-color', 'rgba(' + slider.value() + ',' + slider.value() + ',' + slider.value() + ')');
body.style('background-color', 'rgba(' + slider.value() + ',' + slider.value() + ',' + slider.value() + ')');
//animating the background-change when the slider is triggered
  slider.value(sliderValue);
  if (sliderToggle === true){
    sliderValue -= 2;
  }
  //hiding the slider and displaying the header when the background animation ends
  if (sliderValue < 0 && headerToggle == false){
    slider.addClass('hidden');
    addingHeader();
    headerToggle = true;
  }
    //animating the header and starting the animation for the image when it ends
  if (headerToggle === true && headerPos < 0){
    headerPos += 2;
  } else if (headerPos >= 0 && imgToggle == false){
    addingImage();
  }
  //animating the title and subtitle at every change of content
  if (titlesSize < 30){
    titlesSize += 2;
  }
  //animating the image
  if (imgSize < 100){
    imgSize += 5;
  }

  //properties of the elements that change over time
  title.style('font-size', titlesSize + "px");
  subtitle.style('font-size', titlesSize/1.5 + "px");
  title.html(titleText);
  subtitle.html(subtitleText);
  header.style('top', headerPos + "px");
  container.style('top', headerPos + "px");
  halloweenImg.style('width', imgSize + "%");
}

//animates the change of font and calls the function that starts the animation of the background when it ends
function changeFont() {
  titlesSize = 0;
  titleText = "First of all,";
  subtitleText = "let me change this font...";
    setTimeout(function(){
      titlesSize = 0;
      titleText = "Maybe this one?";
      subtitleText = "Hell no.";
      title.addClass('comicsans');
      subtitle.addClass('comicsans');}, 2000);
      setTimeout(function(){
        titlesSize = 0;
        titleText = "Let's try with these.";
        subtitleText = "OK, I like them.";
        title.addClass('font1');
        headerTitle.addClass('font1');
        subtitle.addClass('font3');}, 4000);
        setTimeout(darkBackground, 6000);

}
//starts the animation for the change of the background color and the slider
function darkBackground() {
  titlesSize = 0;
  titleText = "Now I want a dark background.";
  subtitleText = "It's Halloween, after all...";
  setTimeout(function(){
    slider.toggleClass('hidden');
    sliderToggle = true;}, 1000);
}

//starts the animation for the text when displaying the header
function addingHeader() {
  titlesSize = 0;
  titleText = "let's put here a header.";
  subtitleText = "To make things clear";
}

//starts the animation for the displaying of the image
function addingImage() {
  setTimeout(function(){
    titlesSize = 0;
    titleText = "And then the final touch.";
    subtitleText = "Happy halloween!";
  }, 1500)
  if (imgToggle === false){
   imgToggle = true;
   setTimeout(function(){
     halloweenImg.toggleClass('hidden');
     imgSize = 0;}, 2500);
  }
}
