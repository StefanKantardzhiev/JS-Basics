function gvskong(input){


    let budget = Number(input[0]);
    let actors = Number(input[1]);
    let clothes = Number(input[2]);



    let decors = budget * 0.10;
    let actorcloth = actors * clothes;

    if (actors > 150){ 
        actorcloth *= 0.90;
    }

    let total = decors + actorcloth;

    if(budget >= total){
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${(budget-total).toFixed(2)} leva left.`)
    }else{
        console.log(`Not enough money!`)
        console.log(`Wingard needs ${(total-budget).toFixed(2)} leva more.`);
    }

    
}
gvskong([1,2,3])