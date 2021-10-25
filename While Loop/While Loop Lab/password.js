function test(input) {

    let username = input[0];
    
    let password = input[1];
    
    let data = input[2];
    
    let index = 0;
    
    while (data !== password) {
    
    data = input[index];
    
    index++;
    
    }
    
    console.log(`Welcome ${username}!`);
    
    }

    test([`Gosho`,
    `secret`,
    `secret`])