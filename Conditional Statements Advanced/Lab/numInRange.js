function Converter(input){

    let count = Number(input[0]);

   if(count >= -100 && count !=0 && count <= 100 ){
       console.log("Yes")
   }else{
       console.log("No")
   }
}
Converter([20])