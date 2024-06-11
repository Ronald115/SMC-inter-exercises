function decimalToBinary(decimalNum) {

  if (decimalNum < 0) {
    return "-" + decimalToBinary(Math.abs(decimalNum));
}

  let binaryResult = ""; 

  while (decimalNum > 0) {
      let remainder = decimalNum % 2;  
      binaryResult = remainder + binaryResult; 
      decimalNum = Math.floor(decimalNum / 2); 
  }

  return binaryResult || "0";
}

document.getElementById('converterForm').addEventListener('submit', function(event) {
  event.preventDefault();
  let decimalInput = document.getElementById('decimalInput').value;
  let binaryString = decimalToBinary(Number(decimalInput));
  document.getElementById('binaryOutput').textContent = binaryString;
});
