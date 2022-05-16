function test(input){
    
    let budget = Number(input[0]);
    let season = input[1];
    let fishermanCount = Number(input[2]);
    let boatPrice = 0;
    
    switch(season){
        
    case"Spring":boatPrice=3000;
    break;
    case"Summer":
    case"Autumn":boatPrice=4200;
    break;
    case"Winter":boatPrice=2600;
    break;
    }
    
    if(fishermanCount <= 6 ){
        boatPrice = boatPrice * 0.90;
        
    }else if(fishermanCount <= 11){
        boatPrice = boatPrice * 0.85;
        
    }else if(fishermanCount > 12){
        boatPrice = boatPrice * 0.75;
    }
    
    if(fishermanCount % 2 === 0 && season != "Autumn"){
        boatPrice = boatPrice * 0.95;
    }
    
    if(budget >= boatPrice){
        console.log(`Yes! You have ${(budget-boatPrice).toFixed(2)} leva left.`)
    }else{
        console.log(`Not enough money! You need ${(boatPrice-budget).toFixed(2)} leva.`)
    }
    
}
test([100,`Spring`,200])