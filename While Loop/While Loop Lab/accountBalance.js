function solve(input) {

    let index = 0;
    let sum = 0;
    let installment = input[index];
    index++;
    
    while (installment !== "NoMoreMoney") {
    let money = Number(installment);
    
    if (money < 0) {
            console.log("Invalid operation!"); break;
        } 
        
    sum+= money;
    console.log(`Increase: ${money.toFixed(2)}`);
    
    installment = input[index];
    index++;
    }

    console.log("Total: " + sum.toFixed(2))    
}
solve([5.51,
    69.42,
    100,
    `NoMoreMoney`])