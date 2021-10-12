function Test(input){
    
    let degrees = Number(input[0]);
    let dayTime = input[1];
    let shoes
    let clothes
    
    if(10 <= degrees && degrees <=18 ){
    
        if(dayTime === "Afternoon" || dayTime==="Evening"){
        
        clothes= "Shirt";
        shoes = "Moccasins";
        
        
   }else if(dayTime === "Morning"){
        
        clothes = "Sweatshirt";
        shoes = "Sneakers";
    
    
    }
}  

    if(18 < degrees && degrees <= 24 ){
    
        if(dayTime === "Morning" || dayTime==="Evening"){
        
        clothes= "Shirt";
        shoes = "Moccasins";
        
        
        }
        else if(dayTime === "Afternoon"){
        
        clothes = "T-Shirt";
        shoes = "Sandals";
    
    
    }
    }

    if(degrees >= 25){
            
            if(dayTime === "Morning"){
                
                shoes = "Sandals";
                clothes = "T-Shirt";
                
                
                }
             if(dayTime === "Afternoon"){
                
                shoes = "Barefoot";
                clothes = "Swim Suit";
                
                }
            if(dayTime === "Evening"){
                    shoes = "Moccasins"
                    clothes = "Shirt"
                }
            }
      console.log(`It's ${degrees} degrees, get your ${clothes} and ${shoes}.`)
} 
Test([33,`Evening`])