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
  colorButton.style.color = blue;
}

function openPanel1()
{
  hidePanels();
  var panel1 = document.getElementById('panel1');
  panel1.style.display = "block";
}

function openPanel2()
{
  hidePanels();
  var panel2 = document.getElementById('panel2');
  panel2.style.display = "block";
}

function showPanel(panelNum)
{
  hidePanels();
  var panelName = 'panel' + panelNum;
  var panel = document.getElementById(panelName);
  panel.style.display = "block";
}

function hidePanels()
{
  var panels = document.getElementsByClassName('skillPanels');
  for (var i = 0; i < panels.length; i++)
  {
    panels[i].style.display = "none";
  }
}

testButton.addEventListener('click', function() {
  chrome.tabs.create({url:"http://www.qartwheelproductions.com/antidote/"})
})

colorButton.addEventListener('click', changeHTML);
