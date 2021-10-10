function cinema(input){
   
    let type = (input[0]);
    let seatsG = Number(input[1]);
    let seatsS = Number(input[2]);
    
    let allseats = seatsG * seatsS;
    let income = 0;
    
    
    if(type === "Premiere"){
        
        income = allseats * 12
        
    }
    else if(type === "Normal"){
        income = allseats * 7.50
    }
    if(type === "Discount"){
        income = allseats * 5
    }
     console.log(`${income.toFixed(2)} lv.`)
    
 }
 cinema([`Premiere`,2,3])