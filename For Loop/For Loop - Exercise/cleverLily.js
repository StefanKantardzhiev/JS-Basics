function Lilly(input) {

    let lillyage = Number(input[0]);
    let washMachine = Number(input[1]);
    let toyPrice = Number(input[2]);

    let toysCount = 0;
    let giftMoney = 0;
    let stolenMoney = 0;
    let savedMoney = 0;
    let addedMoney = 10;


    for (let i = 1; i <= lillyage; i++) {
        if (i % 2 === 0) {

            savedMoney = savedMoney + addedMoney;
            addedMoney += 10;
            stolenMoney = stolenMoney + 1;

        } else {
            toysCount = toysCount + 1;

        }

    }

    let totalToys = toyPrice * toysCount
    let totalMoney = (savedMoney + totalToys) - stolenMoney;

    if (totalMoney >= washMachine) {

        console.log(`Yes! ${(totalMoney - washMachine).toFixed(2)}`)
    } else {
        console.log(`No! ${(washMachine - totalMoney).toFixed(2)}`)
    }




}
Lilly([1,2,5])