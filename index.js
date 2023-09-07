document.addEventListener("DOMContentLoaded" , function () {

    const currentUTC = new Date();
    const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDayofTheWeek = daysOfTheWeek[currentUTC.getUTCDay()];
    const currentUTCTime = currentUTC.getTime();

    document.querySelector("[data-testid='currentDayOfTheWeek']").textContent =` TODAY : ${currentDayofTheWeek}`;
    document.querySelector("[data-testid='currentUTCTime']").textContent =` UTC : ${currentUTCTime}`;



});