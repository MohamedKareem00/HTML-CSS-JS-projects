const btnEl = document.getElementById("btn");
const brithdayEl = document.getElementById("brithday");
const resultEl = document.getElementById("result");

function calculateAge() {
  const brithdayValue = brithdayEl.value;
  if (brithdayValue === "") {
    alert("Please Enter Your Birthday");
  } else {
    const { years, months, days } = getAge(brithdayValue);
    resultEl.innerText = `Your age is ${years} years, ${months} months, and ${days} days old`;
  }
}

function getAge(brithdayValue) {
  const today = new Date();
  const birthDate = new Date(brithdayValue);

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  // تعديل الشهور لو سالبة
  if (months < 0) {
    years--;
    months += 12;
  }

  // تعديل الأيام لو سالبة
  if (days < 0) {
    months--;
    // عدد الأيام في الشهر السابق
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
    if (months < 0) {
      months = 11;
      years--;
    }
  }

  return { years, months, days };
}

btnEl.addEventListener("click", calculateAge);
