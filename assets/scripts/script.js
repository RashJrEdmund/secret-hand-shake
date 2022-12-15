const inputNumber = document.getElementById('inputnumber')
const displayResults = document.querySelector('.display-results')
const shakeHandBtn = document.querySelector('.btn')

const arrayOfCode = [
  {bin: 1, response: 'wink'}, 
  {bin:10, response: 'double blink'},
  {bin:100, response: 'close your eyes'},
  {bin: 1000, response: 'jump'}
]
// const reversedArray = []

const convertToBinary = (val) => {
  let remainder = 0, binary = 0, i=1;
  while(val!=0) {
    remainder = val%2
    val = parseInt(val/2);
    binary += remainder*i
    i *= 10;
  }

  return binary
}

shakeHandBtn.addEventListener('click', ()=> {
  let binVal = convertToBinary(inputNumber.value)
  console.log(binVal)
  for (let i=0; i<arrayOfCode.length; i++) {
    if(binVal == arrayOfCode[i].bin){ //calling the fxn to convert to binary
      displayResults.innerHTML = arrayOfCode[i].response
    }
  }
})