function sum1 (num){
    let getnumberTosring = num.toString();
    let getStringToArry = getnumberTosring.split('');
    let put =[];
    for(let i =0;i<getStringToArry.length;i++){
        let getArrytonumber = parseInt(getStringToArry[i]);
        let getNumbertoPow = Math.pow(getArrytonumber,(i+1));
        put.push(getNumbertoPow);  
    }
    let result = put.reduce((numa,numb)=>numa+numb,0)
    console.log(result);
}
sum1(89);
sum1(123);
sum1(65);
sum1(321);
function plus(num){
    let getnumberTosring = num.toString();
    let getStringToArry =  getnumberTosring.split('') 
    let put = [];
    for(let i =0;i<getStringToArry.length;i++){
        let getArrytonumber = parseInt(getStringToArry[i]);
        put.push(getArrytonumber);  
    }
     let result = put.reduce((numa,numb)=>numa*numb)
     return result
}
function resultsum(num){
    let a = plus(num);
    let b = plus(a);
    let c= plus(b);
    let d= plus(c);
    console.log(d);
   
}
resultsum(39);
resultsum(999);
resultsum(4);
function driff(arr1,arr2){
    let put = [];
    let result =[]
    for(let i=0;i<arr1.length;i++){
        if(arr2.indexOf(arr1[i])===-1){
             put.push(arr1[i])
        }
    }
    console.log(put);

    for(let i =0;i<arr2.length;i++){
        if(arr1.indexOf(arr2[i])===-1){
            result.push(arr2[i])
        }
    }
    console.log(result);
    let concatsum = put.concat(result);
    console.log(concatsum);
    let sortConcatsum = concatsum.sort((a,b)=>a-b);
    console.log(sortConcatsum)
}
driff([1,2,3],[100,2,1,10]);
function alphatest(str){
    let numBerOfStr = str.length;
    let strDivice = Math.floor(numBerOfStr/2) ;
    let printStrOther = strDivice -1;
    let printStr = str[strDivice];
    let printOther = str[printStrOther];
    numBerOfStr%2==0 ? console.log( printStr,printOther):console.log(printStr);

}
alphatest('test');
alphatest('testing');
alphatest('middle');
alphatest('a');
function alphabet(str){
    let put =[];
    for(let i =0;i<str.length;i++){
        let strWord = str[i].repeat(i+1);
        put.push(strWord);
    }
    let stringAnser = put.join('-');
    console.log(stringAnser);
    
}
alphabet('abcd')
alphabet('big')
alphabet('test')


