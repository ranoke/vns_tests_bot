const download_to_file = (content, filename, contentType) => {
  const a = document.createElement('a');
  const file = new Blob([content], {type: contentType});
  
  a.href= URL.createObjectURL(file);
  a.download = filename;
  a.click();

	URL.revokeObjectURL(a.href);
};

function answer_t(question, answer, type) 
{
  this.question = question;
  this.answer = answer;
  this.type = type;
}

function get_answer_type(obj)
{
    if(obj.getElementsByClassName("answernumber")) return "with_define_answer_number";
    else return "true_false"
    return "unknown";
}

function get_answer_text(obj, type)
{
    if(type === "true_false")
    {
        return obj.textContent;
    }
    else if(type === "with_define_answer_number")
    {
        var l = 0;
        if(obj.getElementsByClassName("answernumber").length > 0)
        {
            let text = obj.getElementsByClassName("answernumber")[0].textContent;
            l = text.length;

        }
        return obj.innerText.substring(l);
    }
}



// for html recognition
var answer_icon = "icon fa fa-check text-success fa-fw "
var qtext = "qtext";

var answerJson = new Object();
answerJson.answer = [];

let questionObjects = document.getElementsByClassName(qtext);
let answerObjects = document.getElementsByClassName(answer_icon);
for(var i = 0; i < questionObjects.length; i++)
{
    let questionObject = questionObjects[i].getElementsByTagName("p")[0];
    let answerObject = answerObjects[i].parentElement.getElementsByTagName("label")[0];
    let type = get_answer_type(answerObject);
    let answer_text = get_answer_text(answerObject, type);
    console.log(questionObject.textContent, answer_text);
    answerJson.answer.push(new answer_t(questionObject.textContent, answer_text, type));
}

let nav_bar = document.getElementById("page-navbar");
let names = nav_bar.getElementsByTagName("li");
answerJson.name = names[names.length - 1].getElementsByTagName("a")[0].textContent;
answerJson.count = answerObjects.length;

var jsonString = JSON.stringify(answerJson);
download_to_file(jsonString, answerJson.name + ".json", "text/plain");

