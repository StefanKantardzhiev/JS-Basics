function MultiplicationTable(input) {

    let num = Number(input[0]);

    for (i = 1; i < 11; i++) {
        console.log(`${i} * ${num} = ${num * i}`)
    }
}
MultiplicationTable([3])