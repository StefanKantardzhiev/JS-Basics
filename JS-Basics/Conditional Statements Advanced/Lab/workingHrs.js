function Test(input){
    
    let time = Number(input[0]);
    let day = input[1];

    switch(day){
        
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
        case "Saturday":
            if(time<=18 && time >= 10){
                
                console.log(`open`)
            }else{
                console.log(`closed`)
            }
            
         
        break;
        
        case "Sunday":console.log(`closed`)
    }
}
Test([13,`Monday`])