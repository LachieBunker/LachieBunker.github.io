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
  var panel1 = document.getElementById('panel1');
  var panel2 = document.getElementById('panel2');
  panel1.classList.add('show');
  panel2.classList.add('hide');
}

function openPanel2()
{
  var panel1 = document.getElementById('panel1');
  var panel2 = document.getElementById('panel2');
  panel1.style.display = "none";
  panel2.style.display = "block";
}

function clearPanels()
{
  var panels[] = document.getElementsByClassName('skillPanels');
  for (var i = 0; i < panels.length; i++)
  {
    if(panels[i].classList.contains('show'))
    {
      panels[i].classList.remove('show');
    }
    if(panels[i].classList.contains('hide') == false)
    {
      panels[i].classList.add('hide');
    }
  }
}

testButton.addEventListener('click', function() {
  chrome.tabs.create({url:"http://www.qartwheelproductions.com/antidote/"})
})

colorButton.addEventListener('click', changeHTML);
