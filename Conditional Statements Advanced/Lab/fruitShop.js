function Test(input){
    
    let fruit = input[0];
    let dayofWeek = input[1];
    let quantity = input[2];
    
    
    switch(dayofWeek){
        
        case"Monday":
        case"Tuesday":
        case"Wednesday":
        case"Thursday":
        case"Friday":
            switch(fruit){
            case"banana":console.log((quantity*2.5).toFixed(2));
            break;
            case"apple" :console.log((quantity*1.2).toFixed(2));
            break;
            case"orange" :console.log((quantity*0.85).toFixed(2));
            break;
            case"grapefruit":console.log((quantity*1.45).toFixed(2));
            break;
            case"kiwi" :console.log((quantity*2.7).toFixed(2));break;
            case"pineapple" :console.log((quantity*5.5).toFixed(2));break;
            case"grapes" :console.log((quantity*3.85).toFixed(2));break;
            }break;
    case"Saturday":
    case"Sunday":
        switch(fruit){
            case"banana":console.log((quantity*2.7).toFixed(2));
            break;
            case"apple" :console.log((quantity*1.25).toFixed(2));
            break;
            case"orange" :console.log((quantity*0.90).toFixed(2));
            break;
            case"grapefruit":console.log((quantity*1.60).toFixed(2));
            break;
            case"kiwi" :console.log((quantity*3).toFixed(2));break;
            case"pineapple" :console.log((quantity*5.60).toFixed(2));break;
            case"grapes" :console.log((quantity*4.20).toFixed(2));break;
            }
            
    }if(dayofWeek != "Monday" && dayofWeek != "Tuesday"&& dayofWeek != "Wednesday" && dayofWeek!= "Thursday" && dayofWeek!= "Friday" && dayofWeek != "Saturday" && dayofWeek!= "Sunday"){
        console.log("error")
        
    }else if(fruit!= "banana" && fruit!= "apple"&& fruit!= "orange"&& fruit!= "grapefruit"&& fruit!= "grapes" && fruit != "kiwi" && fruit!="pineapple"){
         console.log("error")
    }
                
    




}
Test([`apple`,`Monday`,3])