var userName = prompt("Enter your Name:");

console.log(userName);

var userGender = prompt("Enter your Gender:");

if(userGender =="male" || userGender == "female"){
    console.log("user Gender : " + userGender);
}
else
alert("Gender not Correct")

var userAge = prompt("Enter your Age:");


if(userAge<"18" || userAge =="0"){
    alert("age less than 18");
    
}
else
console.log("user Age : "+userAge);

var askWelcoming = confirm( "Do you want a welcome masege ?");

if(askWelcoming == true){

if(userGender =="male" || userGender =="Male" || userGender =="MALE"){
    var welcomeMassege = alert(`Hello Mr. ${userName}`)

        console.log(welcomeMassege)
        console.log(`Hello mr. ${userName}`)
    }
else if (userGender == "female" || userGender == "Female" || userGender == "FEMALE"){
        var welcomeMassege2 = alert(`Hello Ms. ${userName}`)

        console.log(welcomeMassege2)
        console.log(`Hello mr. ${userName}`)
    }

else{
    var welcomeMassege3 = alert(`Hello  ${userName} (Gender not defiend)`)

        console.log(welcomeMassege3 )
        console.log(`Hello  ${userName} + (Gender not defiend)`)
    }
}


// this part is realted to task 06 that ask the user more 3 qustion 
// in branch todo-js2
var answers = [];
var askWife = prompt("Do you have Wife  ?")
var askKids = prompt("Do you have kids")
var staus = prompt("are you single ")
alert("take alook to console ;)");

addToAnswers(askWife, askKids, staus);
displayAnswers();


function displayAnswers(){

    console.log("Your name is: " + userName)
    console.log("Your age is: " + userAge)
    console.log("Your gender is: " + userGender)

    for(let i = 0; i < answers.length; i++){
        console.log(answers[i]);
    }

}

function addToAnswers(askWife, askKids, staus){

    if(askWife != ""){
        answers.push(askWife);
    }else{
        answers.push("invalid answer")
    }

    if(askKids != ""){
        answers.push(askKids);
    }else{
        answers.push("invalid answer")
    }

    if(staus != ""){
        answers.push(staus);
    }else{
        answers.push("invalid answer")
    }
}

