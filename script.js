const today = new Date();
const month = today.getMonth();
const day = today.getDate();
const year = today.getFullYear();

const bday = new Date(2001, 9, 11);
const bd_month = bday.getMonth();
const bd_day = bday.getDate();
const bd_year = bday.getFullYear();

let b_month = prompt("Please enter your birth month (1-12):");
let b_day = prompt("Please enter your birth day (1-31):");
let b_year = prompt("Please enter your birth year (e.g., 1990):");
b_day = parseInt(b_day);
b_month = parseInt(b_month) - 1;
b_year = parseInt(b_year);


const Months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
 ];


const todayDate = Months[month] + " " + day + " " + year;
const birthDate = Months[b_month] + " " + b_day + " " + b_year;

const imgElement = document.getElementById('emoji');



birthdayMsg = "Message";


if ( month == b_month && day == b_day ) {
    message = "Happy Birthday!"
    birthdayMsg = "Happy Birthday!"
    imgElement.src = 'happy.webp';
    const sound = new Audio('sound.mp3');
    sound.play();
    confetti({
        particleCount: 100,
        startVelocity: 50,
        spread: 200,
    }); 
} else {
    message = "It's not your birthday yet."
    birthdayMsg = "It's not your birthday yet."
    imgElement.src = 'sad-emoji.png';
}


document.getElementById("date").innerHTML = todayDate;
document.getElementById("dob").innerHTML = birthDate;
document.getElementById("message").innerHTML = birthdayMsg;
console.log(message);
console.log("Today is " + todayDate + " Birthday is "  + birthDate);
console.log(b_day + " " + b_month + " " + b_year);
