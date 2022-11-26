let xhr = new XMLHttpRequest()
xhr.open('GET','https://picsum.photos/v2/list?limit=10')
xhr.onload = function() {
  console.log(`Статус: ${xhr.status}; Результат: ${xhr.response}`)
};
xhr.onerror = function() {
  console.log('Ошибка запроса');
};
xhr.send();
let imgBox = document.getElementById('img1')
console.log(imgBox)
function inputNumber () {
  const num = document.getElementById('inp_1').value
  if (num > 10){
    console.log("число вне диапазона от 1 до 10");
    document.getElementById('textarea').innerHTML = `<p id="textarea_p">Число вне диапазона от 1 до 10!</p>`;
  } else if (num < 1) {
      console.log("число вне диапазона от 1 до 10");
    document.getElementById('textarea').innerHTML = `<p id="textarea_p">Число вне диапазона от 1 до 10!</p>`;
    } else {
   if(document.getElementById('textarea_p')){   document.getElementById('textarea_p').remove()}
      let result = JSON.parse(xhr.response)
      let imgUrl= result[num-1].download_url
      document.getElementById('img1').innerHTML = `<img src=${imgUrl} width=200px height=200px></img>`;
   
    }
  }
