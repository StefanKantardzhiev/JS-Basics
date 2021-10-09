function speed(input){

    let kmh=Number(input[0]);
    
    if(kmh <= 10){
        console.log("slow")
    }
    else if(kmh <=50 ){
        console.log("average")
    }
    else if(kmh <= 150){
        console.log("fast")
    }
    else if(kmh <= 1000){
        console.log("ultra fast")
    }
    else if(kmh > 1000){
        console.log("extremely fast")
    }
}
speed([1000])