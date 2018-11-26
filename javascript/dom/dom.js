//bai1
function changeFontSize(x) {
  let color = document.querySelectorAll('p')
  for (let i = 0; i < color.length; i++) {
    color[i].style.fontSize = x + 'px'
  }
}
//bai4
function changeColor(){
    document.getElementById("doan1").style.color = "blue";
    document.getElementById("doan2").style.color = "gold";
    document.getElementById("doan3").style.color = "red";
  }
//bai5
// function changeBgcolor(){
//     document.getElementById('wap').style.backgroundColor="brown";
// }
function changeBgcolor(){
    document.body.style.backgroundColor="green";
}
//bai6
function copyContent(doan1,doan2){
    let text = document.getElementById('doan1')
    text.innerText = document.getElementById('doan2').innerText
}
//bai2
function increaseFontSize(){
let para = document.querySelectorAll('p')
let font = para.style.fontSize;
let newFont = font + x +'px'

}

