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
  var selectorName = 'skillSelect' + selectorNum;
  var selector = document.getElementById(selectorName);
  selector.style.backgroundImage = "url('SkillsButton_Highlighted.png')";
  selector.style.color = white;
  showPanel(selectorNum);
}

function unHighlightSelectors()
{
  var selectors = document.getElementsByClassName('skillSelectors');
  for (var i = 0; i < selectors.length; i++) {
    selectors[i].style.height = 70;
    selectors[i].style.backgroundImage = "url('SkillsButton_Default.png')";
    selectors[i].style.color = #d800ff;
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
