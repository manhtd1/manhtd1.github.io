//bai1;
// var now = new Date();
// var date = now.getDate();
// var month = now.getMonth() + 1;
// var year = now.getFullYear();
// switch (now.getMonth() + 1) {
//     case 1:
//     case 2:
//     case 3:
//         document.write("xuan")
//         break;
//     case 4:
//     case 5:
//     case 6:
//         document.write("ha")
//         break;
//     case 7:
//     case 8:
//     case 9:
//         document.write("thu")
//         break;
//     case 10:
//     case 11:
//     case 12:
//         document.write("Bây giờ là mùa Đông")
//         break;
// }
//  document.write('<br>')
//  document.write(now);
//bai2        

function bai2(a) {
    if (typeof a == "number") {
        console.log('vao chua');
        a = a.toString();
    }
    console.log(typeof a);
    var lens = a.length;
    if (lens <= 10) {
        document.write(a)
    } else {
        document.write(a.slice(0, 10) + "...")
    }
}

//bai3
function bai3(num) {
    if (num >= 0 && num <= 10) {
        switch (num) {
            case 1: (0 <= num <= 3.9)
                document.write('điểm F')
                break;
            case 2: (4 <= num <= 5.4)
                document.write('điểm D')
                break;
            case 3: (5.5 <= num <= 6.9)
                document.write('điểm C')
                break;
            case 4: (7 <= num <= 8.4)
                document.write('điểm B')
                break;
            case 5: (8.5 <= num <= 10)
                document.write('điểm A')
                break;
        }
    }
}
bai3(6)
