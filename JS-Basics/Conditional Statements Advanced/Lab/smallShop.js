function shop(input){
    
    let product = input[0];
    let city = input[1];
    let quantity = Number(input[2]);
    
    let totalPrice=0;
    
    switch(product){
    
    case "coffee":
    if(city === "Plovdiv"){
            
            totalPrice=quantity * 0.40
            console.log(totalPrice)
    }
    else if(city === "Varna"){
            totalPrice=quantity * 0.45
            console.log(totalPrice)
    }
    else if(city === "Sofia"){
            totalPrice=quantity * 0.50
            console.log(totalPrice)
    }
    break;
    case"water":
    if(city === "Plovdiv"){
            
            totalPrice=quantity * 0.70
            console.log(totalPrice)
    }
    else if(city === "Varna"){
            totalPrice=quantity * 0.70
            console.log(totalPrice)
    }
    else if(city === "Sofia"){
            totalPrice=quantity * 0.80
            console.log(totalPrice)
    }
    break;
    case"beer":
    if(city === "Plovdiv"){
            
            totalPrice=quantity * 1.15
            console.log(totalPrice)
    }
    else if(city === "Varna"){
            totalPrice=quantity * 1.10
            console.log(totalPrice)
    }
    else if(city === "Sofia"){
            totalPrice=quantity * 1.20
            console.log(totalPrice)
    }
    break;
    case"sweets":
    if(city === "Plovdiv"){
            
            totalPrice=quantity * 1.30
            console.log(totalPrice)
    }
    else if(city === "Varna"){
            totalPrice=quantity * 1.35
            console.log(totalPrice)
    }
    else if(city === "Sofia"){
            totalPrice=quantity * 1.45
            console.log(totalPrice)
    }
    break;
    case"peanuts":
    if(city === "Plovdiv"){
            
            totalPrice=quantity * 1.50
            console.log(totalPrice)
    }
    else if(city === "Varna"){
            totalPrice=quantity * 1.55
            console.log(totalPrice)
    }
    else if(city === "Sofia"){
            totalPrice=quantity * 1.60
            console.log(totalPrice)
    }



    }
}
shop([`coffee`,`Plovdiv`,100])