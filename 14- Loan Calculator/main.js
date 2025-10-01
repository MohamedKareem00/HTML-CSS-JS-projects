function calculateLoan() {
  loanAmountValue = document.getElementById("loan-amount").value;

  interestRateValue = document.getElementById("interest").value;

  monthTopayValue = document.getElementById("months-to-pay").value;

  interest = (loanAmountValue * (interestRateValue * 0.01)) / monthTopayValue

  monthlypayment = (loanAmountValue / monthTopayValue + interest).toFixed(2);

  document.getElementById("payment").innerHTML = 
  `Monthly Payment: ${monthlypayment}`;
}


