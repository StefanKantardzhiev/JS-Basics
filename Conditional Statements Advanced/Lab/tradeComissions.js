function tradeComission(input){

    let city=input[0];
    let sales =Number(input[1]);
    let discount = 0;


    switch(city){

    case "Sofia":
        if(0<=sales && sales<=500){
             discount =sales*0.05;
        }
        if(500 < sales && sales<= 1000){
            discount = sales*0.07;
        }
        if(1000 < sales && sales<= 10000){
            discount=sales*0.08;
        }
        if(sales > 10000){
            discount=sales*0.12;
        }
        break;
    
        case"Varna" : 
        if(0<=sales && sales<=500){
                discount =sales*0.045;
        }if(500 < sales && sales <= 1000){
            discount = sales*0.075;
        } 
        if(1000 < sales && sales <= 10000){
            discount=sales*0.10;
        }
        if(sales > 10000){
            discount=sales*0.13;
        }
        break;
        case"Plovdiv" : 
        if(0<= sales && sales <= 500){

                discount =sales*0.055;
        }
        if(500 < sales && sales <= 1000){
            discount = sales*0.08;
        }
        if(1000 < sales && sales <= 10000){
            discount=sales*0.12;
        }
        if(sales > 10000){
            discount=sales*0.145;
        } break;   

    }

    if(city !== "Plovdiv" && city !== "Varna" && city !== "Sofia" || sales < 0){
    console.log(`error`)
    }else{
    console.log(discount.toFixed(2))
    }
}

tradeComission([`Plovdiv`,3])