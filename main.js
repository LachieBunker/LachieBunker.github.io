document.addEventListener('main', function() {

  


}, false);


var testButton = document.getElementById('temp');
var colorButton = document.getElementById('Color');

function openWebsite()
{
  chrome.tabs.create({url:"http://www.qartwheelproductions.com/antidote/"})
}

function changeHTML()
{
  colorButton.style.color = "blue";
}

testButton.addEventListener('click', function() {
  chrome.tabs.create({url:"http://www.qartwheelproductions.com/antidote/"})
})

colorButton.addEventListener('click', changeHTML);
