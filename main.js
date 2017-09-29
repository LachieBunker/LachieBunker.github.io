document.addEventListener('DOMContentLoaded', function() {

  var testButton = document.getElementById('temp');

  function openWebsite()
  {
    chrome.tabs.create({url:"http://www.qartwheelproductions.com/antidote/"})
  }

  testButton.addEventListener('click', function() {
    chrome.tabs.create({url:"http://www.qartwheelproductions.com/antidote/"})
  })


}, false);
