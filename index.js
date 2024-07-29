const monthName = document.getElementById("month-name");
const dayname = document.getElementById("day-name");
const daydate = document.getElementById("day-date");
const Year = document.getElementById("year");

const date = new Date();
const month = date.getMonth()
monthName.innerText = date.toLocaleString("en",{
    month:"long"
})

dayname.innerText=date.toLocaleString("en",{
    weekday:"long"
})
daydate.innerText=date.getDate()
Year.innerText=date.getFullYear()