function test(input){

    let deposit = input[0];
    let balance = 0;
    let index = 1;
    
      
      while (deposit !== "NoMoreMoney"){
          let amount = Number(deposit);
          
              if(amount >0){ 
                  
              balance = balance+amount
              
              console.log(`Increase: ${amount.toFixed(2)}`)
              
              
              
              index++
              deposit = input[index];
              }
        
      }
      console.log(`Total: ${balance.toFixed(2)}`)
  }