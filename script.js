function calculateSum() {
 
   num1 = document.getElementById('num1').value;
   num2 = document.getElementById('num2').value;


  
   sum = parseFloat(num1) + parseFloat(num2);

  
  document.getElementById('result').textContent = `Сумма: ${sum}`;
}