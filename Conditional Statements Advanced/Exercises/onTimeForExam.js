function test(input){

    hourOfExam = Number(input[0]);
    minutesOfExam = Number(input[1]);
    hourOfarrive = Number(input[2]);
    minutesOfarrive = Number(input[3]);
    
    
     let timeExam = hourOfExam * 60 + minutesOfExam
     let timeArrive = hourOfarrive * 60 + minutesOfarrive
     
     if(timeArrive > timeExam){
     console.log(`Late`)
     let diff = timeArrive-timeExam
     let h = Math.floor(diff/60);
     let m = diff%60
 
     if(diff >= 60){
         if(m<10){
             console.log(`${h}:0${m} hours after the start`)
                 }
         else{
             console.log(`${h}:${m} hours after the start`)
             }
             }
     else{
             console.log(`${m} minutes after the start`)
         }
     
     }
     
     else if(timeExam>=timeArrive && timeExam - timeArrive <= 30){
         console.log("On time")
         let diff = timeExam-timeArrive
         if(diff !== 0){
             let m = diff%60
     
             console.log(`${m} minutes before the start`)
                        
             }
     }
     else{
     console.log("Early")
     let diff = timeExam - timeArrive
     let h = Math.floor(diff/60);
     let m = diff%60
     if(diff>=60){
         if(m<10){
             console.log(`${h}:0${m} hours before the start`);
         }
         else{
             console.log(`${h}:${m} hours before the start`)
         }
       }    
     else{
         console.log(`${m} minutes before the start`)
         }
     }
 }   

 test([12,22,13,5])