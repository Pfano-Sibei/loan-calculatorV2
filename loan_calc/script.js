function calculateLoan() {
  const amount = parseFloat(document.getElementById('amount').value);
  const interest = parseFloat(document.getElementById('interest').value);
  const years = parseFloat(document.getElementById('years').value);

  const monthlyInterest = interest / 100 / 12;
  const payments = years * 12;

  const x = Math.pow(1 + monthlyInterest, payments);
  const monthlyPayment = (amount * x * monthlyInterest) / (x - 1);

  if (isFinite(monthlyPayment)) {
    document.getElementById('monthly').textContent = monthlyPayment.toFixed(2);
    document.getElementById('total').textContent = (monthlyPayment * payments).toFixed(2);
    document.getElementById('interestAmount').textContent = ((monthlyPayment * payments) - amount).toFixed(2);
    document.getElementById('results').style.display = 'block';
  } else {
    alert("Please fill in all fields with valid numbers.");
    document.getElementById('results').style.display = 'none';
  }
}
