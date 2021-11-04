function solve (input) {
 
    let target = Number(input[0]);
    let sumMoney = 0;
    let index = 1;
    let command = input[index];
    
 
 
    while(command !== "closed") {
       
        command = input[index]; //2
 
        switch(command) {
            case "haircut":
            index++;
            command = input[index];
                switch(command) {
                    case "mens": sumMoney+=15; break;
                    case "ladies": sumMoney+=20; break;
                    case "kids": sumMoney+=10; break;
                } break; 
 
            case "color":
            index++;
            command = input[index];
                switch(command) {
                    case "touch up": sumMoney+=20; break;
                    case "full color": sumMoney+=30; break;
                } break;
        }
        if(sumMoney >= target) {
            console.log(`You have reached your target for the day!`);
            console.log(`Earned money: ${sumMoney}lv.`)
        }
     
        
 
        index++;
        command = input[index];
        break;
        
    }
    
        if(sumMoney < target) {
        console.log(`Target not reached! You need ${target - sumMoney}lv. more.`);
        console.log(`Earned money: ${sumMoney}lv.`);
    }
 
 
 
 
}
solve(["50",
"color",
"full",
"color",
"haircut",
"ladies"])