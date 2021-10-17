function shopping(input) {

    let budget = Number(input[0]);
    let countGPU = Number(input[1]);
    let countCPU = Number(input[2]);
    let countRAM = Number(input[3]);

    let GPU = countGPU * 250
    let CPU = GPU * 0.35 * countCPU
    let RAM = GPU * 0.10 * countRAM
    let total = GPU + RAM + CPU

    if(countGPU > countCPU){
    total *= 0.85; 
    }

    if(budget >= total){
                    console.log(`You have ${(budget-total).toFixed(2)} leva left!`)
    }else{
                    console.log(`Not enough money! You need ${(total-budget).toFixed(2)} leva more!`);
    }
}
shopping([12,3,4,5])