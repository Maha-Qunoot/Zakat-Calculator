function calculateZakat() {
  const incomeInput = document.getElementById('income');
  const resultParagraph = document.getElementById('result');
  const income = parseFloat(incomeInput.value);

  
  const nisab = 103159; 

  if (isNaN(income)) {
    resultParagraph.textContent = 'Please enter a valid amount';
  } else if (income < nisab) {
    resultParagraph.textContent = 'You are not eligible for Zakat';
  } else {
    const zakatAmount = (income - nisab) * 0.025; 
    resultParagraph.textContent = `Your Zakat amount is Rs${zakatAmount.toFixed(2)}`;
  }
}
