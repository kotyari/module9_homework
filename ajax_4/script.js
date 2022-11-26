const btn = document.querySelector('.submitButton')
const text = document.getElementById('textarea')

const inpA = document.getElementById('input_a')
const inpB = document.getElementById('input_b')
const imgBox = document.querySelector('.imgBox')





async function fetch_num(num1, num2) {

 const response = await fetch(`https://picsum.photos/${num1}/${num2}`)
   return response; 
 
} 


btn.addEventListener('click', () => {
  
  console.log(inpA.value)
  console.log(inpB.value)
  if (inpA.value<100 || inpB.value<100 || inpA.value>300 || inpB.value>300 || inpA.value.isNaN || inpB.value.isNaN) {
    text.innerHTML = `<p> одно из чисел вне диапазона от 100 до 300 </p>`
  } else {
    
    text.innerHTML = '';
  
  fetch_num(inpA.value,inpB.value)
  .then((response) => {
    console.log('response', response.url)
  imgBox.innerHTML = `<img src="${response.url}">`;
      console.log('response', response);})
  
    
  }
  
  
 });








