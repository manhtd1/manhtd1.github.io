const result = document.getElementById('result')
function press(button) {
    console.log(button.innerText) // lay dc so la ham button.innerHTNL
    result.value += button.innerText //  dua gia tri cua button vao result
}
clearall = () => result.value = ''
xoa = () => result.value = result.value.substr(0, result.value.length - 1)
percent = () => result.value = eval(eval(result.value) / 100)
equal = () => result.value = eval(result.value)
sqrt = () => result.value = eval(Math.sqrt(result.value))
squared = () => result.value = Math.pow(eval(result.value),2)