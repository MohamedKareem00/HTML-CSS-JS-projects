const btnEl = document.getElementById("btn");
const bmiInputEl = document.getElementById("bmi-result");
const weightConditionEl = document.getElementById("weight-condition");

function calculateBMI() {
  const heightValue = document.getElementById("height").value / 100;
  const weightValue = document.getElementById("weight").value;

  if (!heightValue || !weightValue) {
    weightConditionEl.innerText = "Please enter height and weight!";
    bmiInputEl.value = "";
    return;
  }

  const bmiValue = (weightValue / (heightValue * heightValue)).toFixed(1); // نخلي الرقم عشري واحد
  bmiInputEl.value = bmiValue;

  if (bmiValue < 16) {
    weightConditionEl.innerText = "Severe Thinness";
  } else if (bmiValue >= 16 && bmiValue <= 16.9) {
    weightConditionEl.innerText = "Moderate Thinness";
  } else if (bmiValue >= 17 && bmiValue <= 18.4) {
    weightConditionEl.innerText = "Mild Thinness";
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    weightConditionEl.innerText = "Normal weight";
  } else if (bmiValue >= 25 && bmiValue <= 29.9) {
    weightConditionEl.innerText = "Overweight";
  } else if (bmiValue >= 30 && bmiValue <= 34.9) {
    weightConditionEl.innerText = "Obese Class I";
  } else if (bmiValue >= 35 && bmiValue <= 39.9) {
    weightConditionEl.innerText = "Obese Class II";
  } else if (bmiValue >= 40) {
    weightConditionEl.innerText = "Obese Class III (Extreme)";
  }
}

btnEl.addEventListener("click", calculateBMI);
