 function finndLastChar(str){
    let len= str.length
    let aser = len-1;
    return console.log(str[aser])  

}
finndLastChar('westrid');

let arr = [];
function string(str){
    // let word= str.split('');
    // console.log(word);
    
    for(let i=0; i<str.length;i++){
        arr.push(str[i]);
   }
   console.log(arr)
}
string('westrid');


function findSpace(str){
   let word = str.split(' ');
   let len = word.length;
   let result = len - 1;
   return console.log(result);
}

findSpace('Hello word');

function replaceSpace(str){
    // let word = str.split(' ');
    // let result=  word.join('-')
    // console.log(result);
    let word = str.replaceAll(' ','-');
    return console.log(word);
}

replaceSpace('Hello word');
replaceSpace('My name is bob');

let a = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let b =[];


function decrypt(str){
    let word = str.split('');
    for(let i of word){
        let word = a.indexOf(i);
        let numberof = word+5;
        let c = a[numberof]
        if(c){
            b.push(c);
        }else{
            let numOfEnd = (a.length-1)-word;
            console.log(numOfEnd)
            let newLoop = 5-numOfEnd;
            b.push(a[newLoop-1]);  
        }
    }
  console.log(b);
}

decrypt('xvo');