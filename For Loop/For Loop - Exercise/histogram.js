function Histogram(input){

    let num = Number(input[0]);
    let p1=0;
    let p2=0;
    let p3=0;
    let p4=0;
    let p5=0;




    for(i=1;i<=num;i++){
        let currentNum = Number(input[i])

        if(currentNum<200){
            p1++;
        }else if(currentNum<400){
            p2++
        }else if(currentNum<600){
            p3++
        }else if(currentNum<800){
            p4++
        }else if(currentNum>= 800){
            p5++
        }
        
    
    
    }
    console.log(`${(p1/num*100).toFixed(2)}%`)
    console.log(`${(p2/num*100).toFixed(2)}%`)
    console.log(`${(p3/num*100).toFixed(2)}%`)
    console.log(`${(p4/num*100).toFixed(2)}%`)
    console.log(`${(p5/num*100).toFixed(2)}%`)



}

Histogram([1,3])