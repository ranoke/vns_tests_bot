function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                //alert(allText);
                return allText;
            }
        }
    }
    rawFile.send(null);
}

chrome.browserAction.onClicked.addListener(function(tab) {
  let s = readTextFile("save_answers.js") 
  chrome.tabs.executeScript({
    //code: 'document.body.style.backgroundColor="red"'
    file: "save_answers.js"
  });
});;