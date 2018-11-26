function press(button){
    console.log(button.innerText) // lay dc so la ham button.innerHTNL
    document.getElementById('result').value += button.innerText  //  dua gia tri cua button vao result
}
function clearall(){
    document.getElementById('result').value = ''
}
function xoa(){
    result.value=result.value.substr(0,result.value.length-1)
}
function percent(){
    result.value= eval(result.value / '100')
}
function equal(){
    result.value = eval(result.value)
}