const monthNameEl = document.getElementById("month-name");
const dayNameEl = document.getElementById("day-name");
const dayNumEl = document.getElementById("day-number");
const yearEl = document.getElementById("year");

const data = new Date();
const month = data.getMonth();
monthNameEl.innerText = data.toLocaleDateString("en", {
  month: "long",
});

dayNameEl.innerText = data.toLocaleDateString("en", {
  weekday: "long",
});

dayNumEl.innerText = data.getDate();

yearEl.innerText = data.getFullYear();




