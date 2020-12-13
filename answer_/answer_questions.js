function get_question_type() {
	var test_class_truefalse = "que truefalse adaptive notyetanswered";
	var test_class_multichoise = "que multichoice adaptive notyetanswered";
	if (document.getElementsByClassName(test_class_truefalse).length != 0) return test_class_truefalse;
	else if (document.getElementsByClassName(test_class_multichoise).length != 0) return test_class_multichoise;
}

console.log("Doing job...");



var answerJsonSrc = prompt("Please json with answers", "");



var qtext = "qtext";
var answerJson = JSON.parse(answerJsonSrc);

console.log(answerJson);


question_type = get_question_type();
console.log("Question type: " + question_type);
let test_objets = document.getElementsByClassName(question_type);
let question_objects = document.getElementsByClassName(qtext);

console.log("Test count is: " + test_objets.length);
console.log("Question count is: " + question_objects.length);

for (var i = 0; i < test_objets.length; i++) {
	var question_text = question_objects[i].textContent;

	for (var j = 0; j < answerJson.count; j++) {
		var to_search = answerJson.answer[j].question;

		if (question_text == to_search) {
			var answer = answerJson.answer[j].answer;
			var possible_answer_objects = test_objets[i].getElementsByClassName("answer")[0].childNodes;
			for (var n = 0; n < possible_answer_objects.length; n++) {
				var possible_answer_object = possible_answer_objects[n];
				console.log(possible_answer_object);
				if (!possible_answer_object) continue;
				var possible_answer_text = possible_answer_object.textContent;

				console.log(possible_answer_text + " | " + answer);
				if (!possible_answer_text) continue;
				if (possible_answer_text.includes(answer)) {
					console.log("Click");
					possible_answer_object.getElementsByTagName("input")[0].click();
				}
			}
		}
	}
}
