// 4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

let str=10;
let str1=parseFloat('9.8');
if(str1==str){
    console.log('true');
}
else{
    str1=Math.ceil('9.8')
    console.log(str1);
}


//output is 10 which a number hence converted successfully