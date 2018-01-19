

function displayPosition(jobTitle, companyName, description) {
    console.log("* " + jobTitle + " at " + companyName + " - " + description);
}

let skills = [
    {
        skill: "Drums",
        isCool: true
    },
    {
        skill: "Coffee Making",
        isCool: false
    }
]

function displaySkill() {
    for(i = 0; i < skills.length; i++) {
        if (skills[i].isCool === true) {
            console.log("* `BAM` " + skills[i].skill);
        } else {
            console.log("* " + skills[i].skill);
        } 
    }
    
}



// Name
var myName = "jason simons";

console.log("Name: " + myName.toUpperCase());

console.log("Career: Barista");

console.log("Description: I'm the man.");


// Interests
console.log("My Interests:");

let interests = ["* Music", "* Coffee", "* Video Games"];

for (let i = 0; i < interests.length; i++) {
    console.log(interests[i]);
}


// Experiences
console.log("My Previous Experiences:");

displayPosition("Barista", "Woodlawn Cycle Cafe", "Prepared and served coffee drinks to customers");

displayPosition("Drumline Instructor", "East Hickman Highschool", "Taught highschool students how to play in a drumline.")


// Skills
console.log("My Skills:");
displaySkill();

