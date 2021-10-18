function solve(input){
    let num = input[0];
    let text = "" + num;
    let sum = 0;

    for (i=0; i<text.length ;i++){
        sum += Number(text[i])
        
    }
    console.log(`The sum of the digits is:${sum}`)
}
solve([123])