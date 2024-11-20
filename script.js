const today = new Date();
const month = today.getMonth();
const day = today.getDate();
const year = today.getFullYear();

const bday = new Date(2001, 9, 11);
const bd_month = bday.getMonth();
const bd_day = bday.getDate();
const bd_year = bday.getFullYear();

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
const birthDate = Months[bd_month] + " " + bd_day + " " + bd_year;

const imgElement = document.getElementById('emoji');



birthdayMsg = "Message";


if ( month == bd_month && day == bd_day ) {
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
