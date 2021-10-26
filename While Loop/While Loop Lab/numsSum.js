function test(input){

    let num = Number(input[0]);
    let sum =0;
    let index = 1;
    
    while (sum < num) {
    
    let curentNum = Number(input[index]);
    sum = sum + curentNum;
    index++;
    
    
        
        
    }
    console.log(sum)
    }
    test([20,
        1,
        2,
        3,
        4,
        5,
        6])