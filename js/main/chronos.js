function getGreeting() {
    const now = new Date();
    const hours = now.getHours();

    let greeting;

    if (hours < 12) {
        greeting = "Good Morning";
    } else if (hours < 18) {
        greeting = "Good Afternoon";
    } else if (hours < 22) {
        greeting = "Good Evening";
    } else {
        greeting = "Good Night";
    }

    return greeting;
}

document.getElementById("greeting").innerText = getGreeting();
