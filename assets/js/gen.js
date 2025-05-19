/*
Namso ASAP V1.0 is the modern Credit Card Generator.
RE-WRITTEN BY YAEL MASSIEU.
Instagram: @is.leay
Portfolio: https://yael.pages.dev/
*/
document.addEventListener('DOMContentLoaded', () => {
  showCurrentYear();
  document.getElementById('generar').addEventListener('click', ()=> {
    const maxCards = 100;
    const binInput = document.getElementById('ccpN').value;
    generateCardNumbers(binInput, maxCards);
  });
  document.getElementById('ccpN').addEventListener('change', addXToBin);
  document.getElementById('cleanText').addEventListener('click', resetTextarea);
});

function addXToBin() {
  const bin = document.getElementById('ccpN').value;
  let maxLengthCard;
  const cardBrand = getCardBrand(bin);
  switch (cardBrand) {
    case 'American Express':
      maxLengthCard = 15;
      break;
    case 'Diners Club':
      maxLengthCard = 14;
      break;
    default:
      maxLengthCard = 16;
      break;
  }
  const newBin = bin.padEnd(maxLengthCard, 'x');
  document.getElementById('ccpN').
