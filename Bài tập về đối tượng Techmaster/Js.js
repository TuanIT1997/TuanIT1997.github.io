obj = {
    name: 'Tuan',
    age : 23,
    sayhi: function () {
        alert (`Không cần chào nữa , nãy chào rồi`)
    }
}
function Bai1(obj) {
    return Object.getOwnPropertyNames(obj).length==0;
}
console.log(`Bài 1: `,Bai1(obj));
//////////////////////////////////////////////
let arr = [{name:`sdas`,salary:33},23]
function Bai2(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Number.isFinite(arr[i].salary)) {
            sum += arr[i].salary
        }
    }
    return sum
}
console.log(`Bài 2: `,Bai2(arr));
//////////////////////////////////////////////
function Bai3(obj) {
    if (typeof(obj.sayhi) == "function") {
        obj.sayhi()
    }
    else{
        alert (`Xin chào`);
    }
    return
}
//Bai3(obj)
////////////////////////////////////////////
function multiplyNumeric(obj){ 
    let newObj = new Object();
    for (let i in obj) {
        if (Number.isFinite(obj[i])){
            newObj[i] = obj[i] * 2;
        }
        else{
            newObj[i] = obj[i]
        } 
    }
    return newObj
}
console.log(`Bài 4:`,multiplyNumeric(obj));
/////////////////////////////////////////////
let toan = {
    a: 5,
    b: 10,
}
function calcu(obj) {
    let newObj = new Object();
    newObj.sum = obj.a + obj.b;
    newObj.mul = obj.a * obj.b;
    return newObj
}
console.log(`Bài 5:`,calcu(toan));
/////////////////////////////////////
let arr6 = [{ title: '1234', id: 2 }, { title: 'day la ko la con cua id nao', id: 6 }, { title: 'ĐEN VÂU', parent: 6, id: 9 }, { title: 'xin chao các bạn', parent: 2, id: 3 }, { title: 'Một triệu like', parent: 6, id: 69 }]
function Bai6(arr) {
    console.log(`Bài 6:`);
    function title(arr,i) {
        if (typeof(arr[i].title)!="undefined"){ 
            return `   `+arr[i].title
        }
        else return ``
    }
    function id(arr,i) {
        if (typeof(arr[i].id)!="undefined"){ 
            return ` - có id là `+arr[i].id
        }
        else return ``
    }
    function parent(arr,i) {
        if (typeof(arr[i].parent)!="undefined"){ 
            return ` - parent id là `+ arr[i].parent
        }
        else return ``
    }
    for (let i = 0; i < arr.length; i++) {
        console.log(title(arr,i)+id(arr,i)+parent(arr,i) );
    }
}
Bai6(arr6)
///////////////////////////////////////////////
let arr7 = [10, 80, 30, 90, 40, 50, 70 ,80]
function doiCho(arr7,trai,phai) {
    let x= arr7[trai];
    arr7[trai] = arr7[phai];
    arr7[phai] = x;
}
function phanDoi(arr7,dau,cuoi) {
    let giaTriGiua = arr7[cuoi];
    let trai = dau;
    let phai = cuoi;
    while (true) {
        while ((trai <= phai) && (arr7[trai] < giaTriGiua)) {trai++} 
        while ((phai >= trai) && (arr7[phai] > giaTriGiua)) {phai--}
        if (trai >= phai){
            break
        }
        doiCho(arr7,trai,phai);
        trai++;
        phai--;
    } 
    doiCho(arr7,trai,cuoi);
    return trai;
}
function Bai7(arr7,dau,cuoi) {
    if (dau < cuoi){
        let diemGiua = phanDoi(arr7,dau,cuoi);
        Bai7(arr7,dau,diemGiua-1);
        Bai7(arr7,diemGiua,cuoi);
    }
}
Bai7(arr7,0,arr7.length-1)
console.log(` Bài 7: `,arr7);