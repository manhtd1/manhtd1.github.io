const result= document.getElementById('result')
function press(button){
    console.log(button.innerText) // lay dc so la ham button.innerHTNL
    result.value += button.innerText  //  dua gia tri cua button vao result
}
function clearall(){
    result.value = ''
}
function xoa(){
    result.value = result.value.substr(0,result.value.length-1)
}
function percent(){
    result.value= eval(result.value / '100')
}
function equal(){
   result.value = eval(result.value)
}
/*
// rồi sao
// thấy cái const đầu tiền chưa
// giờ chạy là bị lỗi ngay dòng thứ 4
// nếu tao chuyển hết cái result= document.getElementById('result')
// bật live share lên
// rồi thây
// hay là tao update github lại
//cái go live ở dưới cơ mà
//chuot phải vào file html chọn live
//open with live server
// error on port 5500
//tắt mẹ hết đi rồi bật live server đầu tiên
// à tao bật rồi
// mày có thấy ko
//sang tab live share
//share server
//bật share lên t mới vào đc
//sang tab live share, nó có cái chử Shared Servers to đùng


//http://127.0.0.1:5500/javascript/calculator/index.html
// đây à
// đéo biết bật share 
// thấy rồi làm sao để bật
thì ấn vô đó thôi
sau đó điền port
// rồi kìa
m bật live server chưa đó
rồi còn gì
// nếu khai báo const thì nó lỗi dòng phép tính = kìa
ko đọc đc giá trị value

*/