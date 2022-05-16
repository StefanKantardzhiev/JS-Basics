function test(input){

    N1 = Number(input[0]);
    N2 = Number(input[1]);
    
    sum = N1 + N2
    
    
    let operator = input[2];
    
    switch(operator){
    case "+" :
        if(N2 !== 0 && sum % 2 === 0){
            console.log(`${N1} + ${N2} = ${N1+N2} - even`)
        }else{
        console.log(`${N1} + ${N2} = ${N1+N2} - odd`)
        }
    break;
    case "-" :
        if(N2 !== 0 && (N1-N2) % 2 === 0){
            console.log(`${N1} - ${N2} = ${N1-N2} - even`)
        }else{
        console.log(`${N1} - ${N2} = ${N1-N2} - odd`)
        }
    
    break;
    case "*" :
        if(N2 !== 0 && (N1*N2) % 2 === 0){
            console.log(`${N1} * ${N2} = ${N1*N2} - even`)
        }else{
         console.log(`${N1} * ${N2} = ${N1*N2} - odd`)
        }
        
    
    break;
    case"/":
        if(N2 !== 0){
            console.log(`${N1} / ${N2} = ${(N1/N2).toFixed(2)}`)
        }else{
        console.log(`Cannot divide ${N1} by zero`)
        }
    
    break;
    case"%":
        if(N2 !== 0){
            console.log(`${N1} % ${N2} = ${(N1%N2)}`)
        }else{
        console.log(`Cannot divide ${N1} by zero`)
        }
    }
}
test([1,2,`+`])