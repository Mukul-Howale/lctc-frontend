import {profile} from "../components/profile.js";
import {previousChallenges} from "../components/previous-challenges.js";
import {ongoingChallenges} from "../components/ongoing-challenges.js";
import {upcomingChallenges} from "../components/upcoming-challenge.js";

var ifProfileLoaded = false;
var ifPCLoaded = false;
var ifOCLoaded = false;
var ifUCLoaded = false;

function loadProfile(){
    if(!ifProfileLoaded){
        removeElements();
        let newProfileDiv = document.createElement('div');
        newProfileDiv.innerHTML = profile();
        document.getElementById("dashboard-container").appendChild(newProfileDiv);
    }
    makeReadOnly();
    ifProfileLoaded = true;
    ifPCLoaded = false;
    ifOCLoaded = false;
    ifUCLoaded = false;
}

function loadPreviousChallenges(){
    if(!ifPCLoaded){
        removeElements();
        let newProfileDiv = document.createElement('div');
        newProfileDiv.innerHTML = previousChallenges();
        document.getElementById("dashboard-container").appendChild(newProfileDiv);
    }
    ifPCLoaded = true;
    ifProfileLoaded = false;
    ifOCLoaded = false
    ifUCLoaded = false;
}

function loadOngoingChallenges(){
    if(!ifOCLoaded){
        removeElements();
        let newProfileDiv = document.createElement('div');
        newProfileDiv.innerHTML = ongoingChallenges();
        document.getElementById("dashboard-container").appendChild(newProfileDiv);
    }
    ifOCLoaded = true;
    ifPCLoaded = false;
    ifProfileLoaded = false;
    ifUCLoaded = false;
}

function loadUpcomingChallenges(){
    if(!ifUCLoaded){
        removeElements();
        let newProfileDiv = document.createElement('div');
        newProfileDiv.innerHTML = upcomingChallenges();
        document.getElementById("dashboard-container").appendChild(newProfileDiv);
    }
    ifUCLoaded = true;
    ifOCLoaded = false;
    ifPCLoaded = false;
    ifProfileLoaded = false;
}

document.getElementById('profile').addEventListener('click', loadProfile);
document.getElementById('previous-challenge').addEventListener('click', loadPreviousChallenges);
document.getElementById('ongoing-challenge').addEventListener('click', loadOngoingChallenges);
document.getElementById('upcoming-challenge').addEventListener('click', loadUpcomingChallenges);


function removeElements() {
    var myDiv = document.getElementById('dashboard-container');

    while (myDiv.firstChild) {
        myDiv.removeChild(myDiv.firstChild);
    }
}

function makeReadOnly(){
    const inputBox = document.getElementsByClassName('readOnlyInput');

    for (var i = 0; i < inputBox.length; i++) {
        inputBox[i].readOnly = true;
    }
}