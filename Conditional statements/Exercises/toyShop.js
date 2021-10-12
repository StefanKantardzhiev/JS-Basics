function shop(input) {

    let vacation = Number(input[0]);
    let puzzle = Number(input[1]);
    let dolls = Number(input[2])
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let totalpuzzle = puzzle * 2.6;
    let totaldolls = dolls * 3;
    let totalbears = bears * 4.1;
    let totalminions = minions * 8.20;
    let totaltrucks = trucks * 2;

    let totaltoys = puzzle + dolls + minions + bears + trucks;
    let totalprice = totalpuzzle + totaldolls + totalbears + totalminions + totaltrucks

    if (totaltoys >= 50) {
        totalprice = totalprice * 0.75;
    }

    let afterrent = totalprice * 0.9;

    if (afterrent >= vacation) {
        console.log(`Yes! ${(afterrent-vacation).toFixed(2)} lv left.`)
    } else {

        console.log(`Not enough money! ${(vacation-afterrent).toFixed(2)} lv needed.`);
    }
}
shop(["40.8",
"20",
"25",
"30",
"50",
"10"])