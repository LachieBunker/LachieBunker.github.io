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
  var selectorImgUrl = "url('/ArtAssets/SkillsButton" + selectorNum + "_Highlighted.png')";
  selector.style.backgroundImage = selectorImgUrl;//"url('SkillsButton_Highlighted.png')";
  selector.style.color = "white";
  showPanel(selectorNum);
}

function unHighlightSelectors()
{
  var selectors = document.getElementsByClassName('skillSelectors');
  for (var i = 0; i < selectors.length; i++) {
    var selectorImgUrl = "url('/ArtAssets/SkillsButton" + (i+1) + "_Default.png')";
    selectors[i].style.backgroundImage = selectorImgUrl;//"url('SkillsButton_Default.png')";
    selectors[i].style.color = "#d800ff";
    selectors[i].style.height = selectors[i].style.width;
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

function slideshowButtonClicked(slideshowImage)
{
  var sPanel = document.getElementById('slideshow-panel');
  var slideshowImageUrl = "/ArtAssets/" + slideshowImage + "";
  sPanel.src = slideshowImageUrl;

}

function changeColorByID(id)
{
    var item = document.getElementById(id);
    item.style.backgroundColor = "red";
}

function reqListener () {
  console.log(this.responseText);
}

function loadDocument()
{


    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "http://www.example.org/example.txt");
    oReq.send();

    var item = document.getElementById(id);
    item.innerHTML = oReq;
}
