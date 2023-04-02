let scoreHome = 0;
let scoreGuest = 0;

let home = document.getElementById("home-score");
let guest = document.getElementById("guest-score");
let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

function increaseHomeScoreOne() {
    scoreHome += 1;
    homeScore.textContent = scoreHome;
}
function increaseHomeScoreTwo() {
    scoreHome += 2;
    homeScore.textContent = scoreHome;
}
function increaseHomeScoreThree() {
    scoreHome += 3;
    homeScore.textContent = scoreHome;
}
function increaseGuestScoreOne() {
    scoreGuest += 1;
    guestScore.textContent = scoreGuest;
}
function increaseGuestScoreTwo() {
    scoreGuest += 2;
    guestScore.textContent = scoreGuest;
    
}
function increaseGuestScoreThree() {
    scoreGuest += 3;
    guestScore.textContent = scoreGuest;
    
}