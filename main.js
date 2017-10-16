document.addEventListener('main', function() {




}, false);

var testButton = document.getElementById('temp');
var colorButton = document.getElementById("color");



function openWebsite()
{
  chrome.tabs.create({url:"http://www.qartwheelproductions.com/antidote/"})
}

function changeHTML()
{
  var colorButton = document.getElementById('color');
  colorButton.style.color = "blue";
}

testButton.addEventListener('click', function() {
  chrome.tabs.create({url:"http://www.qartwheelproductions.com/antidote/"})
})

colorButton.addEventListener('click', changeHTML);
