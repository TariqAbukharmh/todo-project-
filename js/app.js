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