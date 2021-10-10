function test(input){
    
    let budget = Number(input[0]);
    let season = (input[1]);
    let destination 
    let moneySpent = 0;
    let place 
    switch(season){
    
    case"summer":
        
        if(budget <= 100){
         place = "Camp" 
         destination = "Bulgaria";
         moneySpent = budget * 0.30  ;
         
        }
       
        if(budget > 100 && budget <= 1000){
         place = "Camp" 
         destination = "Balkans";
         moneySpent = budget * 0.40;   
        }else if(budget>1000){
            
            place = "Hotel"
            destination="Europe"
            moneySpent= budget * 0.9;
        }
        
     break;
     case"winter":
         
         if(budget <= 100){
         place = "Hotel"
         destination = "Bulgaria";
         
         moneySpent = budget * 0.70  ;
         
        }
        if(budget > 100 && budget <= 1000 ){
            place = "Hotel"
            
         destination = "Balkans";
         moneySpent = budget * 0.80;   
         
         
        }else if(budget > 1000){
            
            place = "Hotel";
            destination="Europe";
            moneySpent= budget * 0.9;
        }
        
        
     
    }
 
         console.log(`Somewhere in ${destination}`)
         console.log(`${place} - ${moneySpent.toFixed(2)}`)
 }
 test([10000,'summer'])