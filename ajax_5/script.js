const imgBox = document.getElementById("imgBox");
const btn = document.getElementById("btn1");
const inp1 = document.getElementById("inp1");
const inp2 = document.getElementById("inp2")
const textArea = document.querySelector('.p_text')


 document.addEventListener("DOMContentLoaded", function(){
 if (localStorage.getItem('lastReq')){
   let massive = JSON.parse(localStorage.getItem('lastReq'))
   let img;
   imgBox.innerHTML = ''
 for (i=0;i<massive.length;i++){
  img = document.createElement("IMG");
 
  img.src = `${massive[i].download_url}`;
   img.width =`${massive[i].width/4}`
   //Уменьшил общий размер картинок
 //Чтобы нормально влезали в экран
     img.height = `${massive[i].height/4}`
   imgBox.appendChild(img);
  
 }
 }
 });



btn.addEventListener('click', function(){
  
console.log(inp1.value)
console.log(inp2.value)
let statementOne = Boolean(inp1.value <1 || inp1.value >10 || isNaN(inp1.value));
 console.log(statementOne);
  
let statementTwo = Boolean(inp2.value <1 || inp2.value >10 || isNaN(inp2.value) );
  console.log(statementTwo);
if (statementOne && statementTwo ){
  imgBox.innerHTML='<p class="p_text_error">Номер страницы и лимит вне диапазона от 1 до 10</p>';
}
else if (statementOne) {
  imgBox.innerHTML='<p class="p_text_error">Номер страницы вне диапазона от 1 до 10</p>';
  
}
  else if(statementTwo) {
    imgBox.innerHTML='<p class="p_text_error">Лимит вне диапазона от 1 до 10</p>';
    
  } else{
    if(document.querySelector('.p_text')){
    document.querySelector('.p_text').remove()}
else if(document.querySelector('.p_text_error')){document.querySelector('.p_text_error').remove()} 
    
    if(document.querySelector('img')){
      imgBox.innerHTML = '';
    }

  const xhr = new XMLHttpRequest();
xhr.open("get", `https://picsum.photos/v2/list?page=${inp1.value}&limit=${inp2.value}`, true);
xhr.send();

  xhr.onload = () => {
    let result = xhr.response;
let massive = JSON.parse(result);
localStorage.setItem("lastReq", result)
  console.log(massive)

  let img;
for (i=0;i<massive.length;i++){
 img = document.createElement("IMG");
 
 img.src = `${massive[i].download_url}`;
  img.width =`${massive[i].width/4}`
  //Уменьшил общий размер картинок
//Чтобы нормально влезали в экран
    img.height = `${massive[i].height/4}`
  imgBox.appendChild(img);
  
} } }
  }  )
console.log(imgBox); 









