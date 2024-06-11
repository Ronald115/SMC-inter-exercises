function justifyText(text, maxCharsPerLine) {
  const words = text.split(' ');

  let currentLine = '';
  let justifiedText = '';

  for (let word of words) {
      // If adding the current word exceeds the character limit, add the line to the result
      if ((currentLine + word).length > maxCharsPerLine) {
          justifiedText += currentLine.trim() + '\n';  
          currentLine = word + ' ';  
      } else {
          currentLine += word + ' ';
      }
  }

  justifiedText += currentLine.trim();  

  return justifiedText;
}

document.getElementById('justifyForm').addEventListener('submit', function(event) {
  event.preventDefault();
  let textInput = document.getElementById('justifyInput').value;
  let maxCharsInput = document.getElementById('maxCharsInput').value;
  let justifiedText = justifyText(textInput, Number(maxCharsInput));
  document.getElementById('justifiedOutput').textContent = justifiedText;
});
