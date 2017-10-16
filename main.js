document.addEventListener('main', function() {




}, false);

var testButton = document.getElementById('temp');
//var colorButton = document.getElementById('color');



function openWebsite()
{
  chrome.tabs.create({url:"http://www.qartwheelproductions.com/antidote/"})
}

function changeHTML()
{
  var colorButton = document.getElementById('color');
  colorButton.style.
}

function openPanel1()
{
  var panel1 = document.getElementById('panel1');
  var panel2 = document.getElementById('panel2');
  panel1.style.display = block;
  panel2.style.display = none;
}

function openPanel2()
{
  var panel1 = document.getElementById('panel1');
  var panel2 = document.getElementById('panel2');
  panel1.style.display = none;
  panel2.style.display = block;
}

testButton.addEventListener('click', function() {
  chrome.tabs.create({url:"http://www.qartwheelproductions.com/antidote/"})
})

colorButton.addEventListener('click', changeHTML);
