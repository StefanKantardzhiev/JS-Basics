function test(input){
   
    let index = 0;
 
 while (true) {
     
 let str=input[index];
 index++;
 
     if(str === "Stop"){
     break;
     }
 
 
 console.log(str);
 
 }
 }
 test([1,2,3,`Stop`])