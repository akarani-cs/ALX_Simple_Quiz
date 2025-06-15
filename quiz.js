
function checkAnswer() {
    const correctAnswer = "4"; //correct anser for the question

   


    const userAnswer = document.querySelector('input[name="quiz"]:checked'); //get the selected answer
    if (userAnswer) {
        if (userAnswer.value === correctAnswer) {
            document.getElementById("feedback").innerHTML = "Correct! Well done."; //display correct message
        }
        else {
            document.getElementById("feedback").innerHTML = "That's incorrect. Try again! " +correctAnswer; //display incorrectmessage
        }
    }

   
 //event listener for the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);


}

