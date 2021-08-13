function Bai1(n){
    let str=``;
    let KT=Number.isInteger(n);
    if (!KT || (n<2)){
        str='Nhập sai dữ liệu';
        return str;
    }
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            str+=`*`;
        }
        str+='<br>'
    }
    return str;
}
document.write(`Bài 1:<br>`, Bai1(5),`<br>`);

function Bai2(a,b){
    let str=``;
    let KTa=Number.isInteger(a);
    let KTb=Number.isInteger(b);
    if (KTa && KTb){
        if((a>=3) && (b>=3)){
            for (let j = 0; j < a; j++) {
                str+=`*`;
            }
            str+='<br>';
            for (let i = 2; i <= b-1; i++) {
                str+=`*`;
                for (let j = 1; j <= a-2; j++) {
                    str+=`0`;
                    // Em không tạo được khoảng trắng ;)
                }
                str+=`*<br>`;
            }    
            for (let j = 0; j < a; j++) {
                str+=`*`;
            }
            str+='<br>';
        }
            return str;
    }
    str='Nhập sai dữ liệu';
    return str;
}
document.write(`Bài 2:<br>`,Bai2(6,4),`<br>`);

function Bai3(n){
    let str=``;
    let KT=Number.isInteger(n);
    if (!KT || (n<=1)){
        str='Nhập sai dữ liệu';
        return str;
    }
    let day=1;
    for (let i = 1; i <= n-1; i++) {
        day+=2;
    }
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i-1; j++) {
            str+=`0`;
        }
        for (let j = 1; j <=day; j++) {
            str+=`*`;
        }
        day-=2;
        str+=`<br>`
    }
    return str;
}
document.write(`Bài 3:<br>`,Bai3(4),`<br>`);

function Bai4(n){
    let str=``;
    let KT=Number.isInteger(n);
    if (!KT || (n<4) || !(n%2)){
        str='Nhập sai dữ liệu';
        return str;
    }
    for (let i = 1; i <=n; i++) {
       for (let j = 1; j <=n; j++) {
           if ((j==i) || (j==n-i+1)){
               str+=`*`;
           }else{
               str+=`0`;
           }
       }
       str+=`<br>`;
    }
    return str;
}
document.write(`Bài 4:<br>`,Bai4(7),`<br>`)

function Bai5(n){
    let str=``;
    let KT=Number.isInteger(n);
    if (!KT || (n<4) || !(n%2)){
        str='Nhập sai dữ liệu';
        return str;
    }
    for (let i = 1; i <=n; i++) {
        for (let j = 1; j <=n; j++) {
            if (i<=n-i+1){
                if ((j<=i) || (j>=n-i+1)){
                    str+=`*`;
                }else{
                    str+=`0`;
                }
            }else{
                if ((j>=i) || (j<=n-i+1)){
                    str+=`*`;
                }else{
                    str+=`0`;
                }
            }
        }
        str+=`<br>`;
     }
     return str;
}
document.write(`Bài 5:<br>`,Bai5(7),`<br>`)