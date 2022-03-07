window.onscroll = function () {
    scrollFunction();
}


// Javascript to show the go to up button when user scrolls down by 20 pixel
function scrollFunction() {
    var mybutton = document.getElementById("goup");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "flex";
    } else {
        mybutton.style.display = "none";
    }
}


// Javascript for scroll to top function on click of button
function goup() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// Javascript to validate form
function validateform() {
    var fname = document.forms["msg"]["firstname"].value;
    var lname = document.forms["msg"]["lastname"].value;
    var email = document.forms["msg"]["email"].value;
    var message = document.forms["msg"]["message"].value;
    if (fname == "" || lname == "" || message == "" || email == "") {
        alert("Please Fill The Details Properly");
        return false;
    } else {
        alert("Thank You for the Feedback!")
    }
}


// Javascript to show real time 
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";
    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    let currentTime = hour + ":" + min + ":" + sec + "&nbsp;" + am_pm;
    document.getElementById("datetime").innerHTML = currentTime;
}
if (document.getElementById("datetime") != null) {
    setInterval(showTime, 1000);
}


// Javascript for hamburger toggle in mobile devices
function toggle() {
    var element = document.getElementById("nav");
    element.classList.toggle("show");
}