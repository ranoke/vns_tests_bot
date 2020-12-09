function Answer(question, answer) {
  this.question = question;
  this.answer = answer;
}

const downloadToFile = (content, filename, contentType) => {
  const a = document.createElement('a');
  const file = new Blob([content], { type: contentType });

  a.href = URL.createObjectURL(file);
  a.download = filename;
  a.click();

  URL.revokeObjectURL(a.href);
};




console.log("Doing job...");

var answerJsonSrc = prompt("Please json with answers", "");

//answerJsonSrc = '{"answer":[{"question":"Правильним є словосполучення згідно наказу","answer":"Неправильно"},{"question":"Правильним є словосполучення відповідно постанови","answer":"Неправильно"},{"question":"Правильним є словосполучення за інструкцією інженера","answer":"Правильно"},{"question":"Правильним є словосполучення прийняти міри","answer":"Неправильно"},{"question":"Правильним є словосполучення в залежності від потужності","answer":"Неправильно"},{"question":"Правильним є словосполучення брати участь у нараді","answer":"Правильно"},{"question":"Правильним є словосполучення рекомендований лист","answer":"Правильно"},{"question":"Правильним є словосполучення бувший механік","answer":"Неправильно"},{"question":"Правильним є словосполучення купляти в магазині електротоварів","answer":"Неправильно"},{"question":"Правильним є словосполучення завідувач кафедри автомобілебудування","answer":"Правильно"}],"count":10}';


var testClass = "que truefalse adaptive notyetanswered";
var qtext = "qtext";

var aJson = JSON.parse(answerJsonSrc);

console.log(aJson);



let tests = document.getElementsByClassName(testClass);
let questions = document.getElementsByClassName(qtext);
for (var i = 0; i < tests.length; i++) {
  var q = questions[i].getElementsByTagName("p")[0].textContent;


  for (var j = 0; j < aJson.count; j++) {
    var to_search = aJson.answer[j].question;

    //console.log("Searching: " + to_search);
    if (q == to_search) {
      var a = aJson.answer[j].answer;
      cAns = tests[i].getElementsByClassName("answer")[0].childNodes;
      for (var n = 0; n < cAns.length; n++) {
        if (a == cAns[n].getElementsByTagName("label")[0].textContent) {
          cAns[n].getElementsByTagName("input")[0].click();
          console.log("click: " + a + " " + q);
        }
      }
    }
  }

}
//var jsonString = JSON.stringify(aJson);

//console.log(jsonString);

//downloadToFile(jsonString, "answers.json", "text/plain");