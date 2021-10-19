function numDividBy9(input){

    let num=   Number(input[0]);
    let num2 = Number(input[1]);
    let sum = 0;
    for(i=num;i<=num2;i++){
        if(i % 9 === 0){
             sum += i;
        }

        

    }

    console.log(`The sum: `+sum)
    for (let i=num;i<=num2;i++)
    if(i%9===0){
        console.log(i)
    }
}
numDividBy9([1,9])