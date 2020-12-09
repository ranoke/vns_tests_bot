
function Answer(question, answer) {
  this.question = question;
  this.answer = answer;
}

const downloadToFile = (content, filename, contentType) => {
  const a = document.createElement('a');
  const file = new Blob([content], {type: contentType});
  
  a.href= URL.createObjectURL(file);
  a.download = filename;
  a.click();

	URL.revokeObjectURL(a.href);
};


console.log("Save");

var answer_icon = "icon fa fa-check text-success fa-fw "
var qtext = "qtext";

var aJson = new Object();
aJson.answer = [];



let answers = document.getElementsByClassName(answer_icon);
let questions = document.getElementsByClassName(qtext);
for(var i = 0; i < answers.length; i++)
{
    //console.log(answers[i].textContent);
    var ans = answers[i].parentElement.getElementsByTagName("label")[0].textContent;
    var q = questions[i].getElementsByTagName("p")[0].textContent;
    aJson.answer.push(new Answer(q, ans));

}

let nav_bar = document.getElementById("page-navbar");
let names = nav_bar.getElementsByTagName("li");

aJson.name = names[names.length - 1].getElementsByTagName("a")[0].textContent;

aJson.count = answers.length;

var jsonString = JSON.stringify(aJson);



console.log(jsonString);

downloadToFile(jsonString, aJson.name + ".json", "text/plain");