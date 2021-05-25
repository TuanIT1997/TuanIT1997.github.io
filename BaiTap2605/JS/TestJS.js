function Bai1(c){
    if (Number.isFinite(c)){
        return 9/5*c+32;
    }
    else{
        return `Nhập sai dữ liệu`;
    }
}
document.write('Bài 1: ',Bai1(50),` độ F<br>`);
//////////////////////////////////////////////////
function Bai2(arr) {
    let viTri1=0,viTri2;
    if (arr.length<2){
        return `Nhập sai dữ liệu`;
    }
    for (let i = 0; i < arr.length; i++) {
        if (Number.isFinite(arr[i])){
            if (arr[i]>arr[viTri1]){
                viTri2=viTri1;
                viTri1=i;
            }else{
                if (arr[i]>arr[viTri2]){
                    viTri2=i;
                }
            }
        }
        else{
            return `Nhập sai dữ liệu`;
        }
    }
    return arr[viTri2];
}
document.write(`Bài 2: `,Bai2([3,5,4324324,4324,43]),`<br>`)
///////////////////////////////////////////////
function Bai3(arr){
    let viTri=0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof(arr[i])=="string"){
            if (arr[i].length>arr[viTri].length){
                viTri=i;
            }
        }else{
            return `Nhập sai dữ liệu`
        }
    }
    return arr[viTri]
}
document.write(`Bài 3: `,Bai3([`daweqw`,`ds`,`eưqeqweqwe`]),`<br>`)
///////////////////////////////////////////////////////////////////
function Bai4(str,tar){
    if (typeof(str)!="string" || typeof(tar)!="string" || str.length==0 || tar.length==0){
        return `Nhập sai dữ liệu `
    }else{
        if (str.lastIndexOf(tar) == str.length-tar.length){
            return true
        }else{
            return false
        }
    }
}
document.write(`Bài 4: `,Bai4('eqweqwnhap',`nhap`),`<br>`)
///////////////////////////////////////////////////////////
function Bai5(arr) {
    for (let i = 0; i < arr.length-1; i++) {
        if (typeof(arr[i])=="string"){
            for (let j = i+1; j < arr.length; j++) {
                if (typeof(arr[j])=="string"){
                    if (arr[i]===arr[j]){
                        return true
                    }
                }else{
                    return `Nhập sai dữ liệu `
                }
            }
        }else{
            return `Nhập sai dữ liệu`
        }
    }
    return false
}
document.write(`Bài 5: `,Bai5([`dwas`,'dsa',`dwas`]),`<br>`)
/////////////////////////////////////////////////////////////
function Bai6(arr){
    let tong=0;
    for (let i = 0; i < arr.length; i++) {
        if (Number.isFinite(arr[i])){
            tong+=arr[i]
        }else{
            
        }
    }
    return tong
}
document.write(`Bài 6: `,Bai6([3,2]),`<br>`)
/////////////////////////////////////////////////
function Bai7(daySoChia) {
    function layDu(a) {
        return a%2;
    }
    for (let i = 0; i < daySoChia.length; i++) {
        if (!Number.isInteger(daySoChia[i])){
            return `Nhập sai dữ liệu `
        }
    }
    let daySoDu=daySoChia.map(layDu);
    return daySoDu;
}
document.write(`Bài 7: `,Bai7([213,214,21,42,14]),`<br>`)
/////////////////////////////////////////////////////////
function Bai8(arr) {
    function locSo(a) {
        return a%2==0;
    }
    for (let i = 0; i < arr.length; i++) {
        if (!Number.isInteger(arr[i])){
            return `Nhập sai dữ liệu `
        }
    }
    let daySoChan = arr.filter(locSo);
    return daySoChan;
}
document.write(`Bài 8: `,Bai8([213,214,21,42,14,3,4]),`<br>`)







