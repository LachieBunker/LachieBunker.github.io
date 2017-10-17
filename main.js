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

function selectorClicked(selectorNum)
{
  unHighlightSelectors();
  showPanel(selectorNum);
}

function unHighlightSelectors()
{
  var selectors = document.getElementsByClassName('skillSelectors');
  for (var i = 0; i < selectors.length; i++) {
    selectors[i].style.height = 50%;
  }
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
