const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const today = new Date();
const currentMonth = today.getMonth();
const currentYear = today.getFullYear();

let currentDate = 1;
const calendarBody = document.getElementById("calendar-body");

function createCalendar() {
    calendarBody.innerHTML = "";
    let daysInMonth = 32 - new Date(currentYear, currentMonth, 32).getDate();
    let firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

    for (let i = 0; i < firstDayOfMonth; i++) {
        calendarBody.innerHTML += `<td>&nbsp;</td>`;
    }

    for (let i = 1; i <= daysInMonth; i++) {
        const dayElement = document.createElement("td");
        dayElement.innerText = i;
        dayElement.className = "day";

        if (i === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear()) {
            dayElement.className += " today";
        }

        const event = checkForEvent(i, currentMonth, currentYear);
        if (event) {
            dayElement.className += " event";
            dayElement.title = event.name;
        }

        calendarBody.appendChild(dayElement);
    }
}

function checkForEvent(day, month, year) {
    // Replace the following array with actual temple events and Indian festivals
    const events = [
        { day: 1, month: 0, year: 2023, name: "Makar Sankranti" },
        { day: 14, month: 0, year: 2023, name: "Pongal" },
        { day: 26, month: 1, year: 2023, name: "Maha Shivaratri" },
        // Add more events here
    ];

    for (const event of events) {
        if (event.day === day && event.month === month && event.year === year) {
            return event;
        }
    }

    return null;
}

document.getElementById("month").innerText = `${monthNames[currentMonth]} ${currentYear}`;
createCalendar();